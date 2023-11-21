import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Main_Screen = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [paginationAlphabet, setPaginationAlphabet] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://api.codespade.com:4517/codespade/api/bahasa-daerah"
      );
      const result = await response.json();

      setData(result);
      setFilteredData(result);
      const letters = Object.keys(groupByFirstLetter(result)).sort();
      setPaginationAlphabet(letters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigateToDetail = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.bahasa.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const groupByFirstLetter = (data) => {
    const grouped = {};
    data.forEach((item) => {
      const firstLetter = item.bahasa.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(item);
    });
    return grouped;
  };

  const renderAlphabetButton = (letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.alphabetButton}
      onPress={() => handleAlphabetPress(letter)}
    >
      <Text style={styles.alphabetText}>{letter}</Text>
    </TouchableOpacity>
  );

  const renderAlphabetPagination = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.alphabetContainer}
    >
      {paginationAlphabet.map(renderAlphabetButton)}
    </ScrollView>
  );

  const handleAlphabetPress = (letter) => {
    const filteredByLetter = data.filter(
      (item) => item.bahasa.charAt(0).toUpperCase() === letter
    );
    setFilteredData(filteredByLetter);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari bahasa..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {renderAlphabetPagination()}
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.nomor.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigateToDetail(item)}
              style={styles.languageContainer}
            >
              <Text style={styles.languageName}>{item.bahasa}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Tidak ada hasil</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    justifyContent: 'flex-start',
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  alphabetContainer: {
    marginBottom: 16,
    height: 50,
  },
  alphabetButton: {
    width: 35,
    height: 35,
    padding: 10,
    marginRight: 8,
    backgroundColor: "tomato",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },
  alphabetText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  languageContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'flex-start'
  },
  languageName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default Main_Screen;
