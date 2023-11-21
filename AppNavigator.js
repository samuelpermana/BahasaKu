import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Main_Screen from './pages/MainScreen';
import AboutPage from './pages/AboutPage';
import Profil from './pages/ProfilScreen';
import DetailScreen from './pages/detailScreen';
import ListWilayah from './pages/ListWilayah';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Daftar Bahasa" component={Main_Screen} />
    <Stack.Screen name="DetailScreen" component={DetailScreen} />
    <Stack.Screen name="ListWilayah" component={ListWilayah} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Bahasaku') {
              iconName = 'ios-home';
            } else if (route.name === 'Profil') {
              iconName = 'ios-person';
            } else if (route.name === 'About') {
              iconName = 'ios-information-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Bahasaku" component={MainStack} />
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="About" component={AboutPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
