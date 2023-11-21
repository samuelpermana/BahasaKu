// ListProvinsi.js

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ListWilayah = ({ route }) => {
  const { provinsiData } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{provinsiData.provinsi}</Text>
      <Text style={styles.label}>Deskripsi:</Text>
      <Text>{provinsiData.deskripsi.join('\n')}</Text>
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
});

export default ListWilayah;
