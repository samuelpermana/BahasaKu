import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{item.bahasa}</Text>
      <Text style={styles.label}>List Wilayah: {item.listWilayah.join(', ')}</Text>
      <Text style={styles.label}>List Provinsi:</Text>
      {item.listProvinsi.map((provinsiItem) => (
        <View style={styles.provinceContainer} key={provinsiItem.id}>
          <Text style={styles.provinceName}>{provinsiItem.provinsi}</Text>
          <Text>{provinsiItem.deskripsi.join('\n')}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  provinceContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
  provinceName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DetailScreen;
