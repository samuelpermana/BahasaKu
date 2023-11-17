import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main_Screen = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://api.codespade.com:4517/codespade/api/bahasa-daerah');
      const result = await response.json();

      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToDetail = (item) => {
    navigation.navigate('DetailScreen', { item });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.bahasa.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari bahasa..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.nomor.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToDetail(item)} style={styles.languageContainer}>
              <Text style={styles.languageName}>{item.bahasa}</Text>
              <Text style={styles.label}>List Wilayah: {item.listWilayah.join(', ')}</Text>
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
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  languageContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  languageName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default Main_Screen;
