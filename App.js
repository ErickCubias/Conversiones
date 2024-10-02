import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Historial from './frontend/Historial'; 
import Home from './frontend/Home'; 
import Longitud from './frontend/Longitud'; 
import Peso from './frontend/Peso';
import Temperatura from './frontend/Temperatura';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Definimos el Stack para Home
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Categorias" component={Home} />
      <Stack.Screen name="Longitud" component={Longitud} />
      <Stack.Screen name="Peso" component={Peso} />
      <Stack.Screen name="Temperatura" component={Temperatura} />
    </Stack.Navigator>
  );
};

// Navegación por pestañas
const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Historial" component={Historial} />
    </Tab.Navigator>
  );
};

// Componente principal
const App = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default App;
