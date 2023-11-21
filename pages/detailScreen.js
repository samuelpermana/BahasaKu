import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const navigateToListProvinsi = (provinsiData) => {
    navigation.navigate("ListWilayah", { provinsiData });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{item.bahasa}</Text>
      <Text style={styles.label}>
        List Wilayah: {item.listWilayah.join(", ")}
      </Text>
      <Text style={styles.label}>List Provinsi yang Menggunakan:</Text>
      <View style={styles.provinceListContainer}>
        {item.listProvinsi.map((provinsiItem) => (
          <TouchableOpacity
            style={styles.provinceContainer}
            key={provinsiItem.id}
            onPress={() => navigateToListProvinsi(provinsiItem)}
          >
            <Text style={styles.provinceName}>{provinsiItem.provinsi}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  provinceListContainer: {
    marginTop: 8,
  },
  provinceContainer: {
    marginVertical: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "white",
  },
  provinceName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailScreen;
