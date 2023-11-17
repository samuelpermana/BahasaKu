import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profil = () => {
  const handleIconPress = (socialMedia) => {
    let url;
    switch (socialMedia) {
      case 'instagram':
        url = 'https://www.instagram.com/samuelpermana_/';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/in/samuel-arya-permana/';
        break;
      case 'github':
        url = 'https://github.com/samuelpermana/';
        break;
      default:
        break;
    }

    // Buka URL di browser ketika ikon diklik
    if (url) {
      Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D5603AQHCvI-UkV2-mA/profile-displayphoto-shrink_400_400/0/1693457971366?e=1705536000&v=beta&t=UVdpLC7S9u0z6T4sM1lXoUqjzBFtofQA0YHXiAN1NAg' }} // Ganti dengan URL foto profil Anda
        style={styles.profileImage}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Samuel Arya Permana</Text>
        <Text style={styles.major}>21120121130050</Text>
        <Text style={styles.major}>Teknik Komputer</Text>
        <Text style={styles.university}>Universitas Diponegoro</Text>
      </View>
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => handleIconPress('instagram')}>
          <Ionicons name="logo-instagram" size={30} color="#405DE6" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('linkedin')}>
          <Ionicons name="logo-linkedin" size={30} color="#0077B5" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('github')}>
          <Ionicons name="logo-github" size={30} color="#211F1F" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  major: {
    fontSize: 16,
    color: 'gray',
  },
  university: {
    fontSize: 16,
    color: 'gray',
  },
  socialIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Profil;
