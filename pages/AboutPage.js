import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await fetch('http://api.codespade.com:4517/codespade/api/bahasa-daerah/provinsi');
      const result = await response.json();

      setProvinces(result);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini bertujuan untuk memperkenalkan berbagai bahasa daerah di seluruh Indonesia.
        Dengan aplikasi ini, Anda dapat mengetahui informasi dasar tentang setiap bahasa,
        wilayah tempat bahasa tersebut digunakan, dan beberapa informasi menarik lainnya.
      </Text>
      <Text style={styles.heading}>Provinsi di Indonesia:</Text>
      {provinces.map((province) => (
        <Text key={province}>{province}</Text>
      ))}
      <Text style={styles.note}>Selamat menjelajahi keberagaman bahasa di Indonesia!</Text>
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
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  note: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AboutPage;
