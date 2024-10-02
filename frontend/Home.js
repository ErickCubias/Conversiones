import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Selecciona una categoría</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Longitud')} // Navegar a la pantalla Longitud
      >
        <Text style={styles.buttonText}>Conversión de Longitud</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Peso')} // Navegar a la pantalla Peso
      >
        <Text style={styles.buttonText}>Conversión de Peso</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Temperatura')} // Navegar a la pantalla Temperatura
      >
        <Text style={styles.buttonText}>Conversión de Temperatura</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d4c4c',
  },
  title: {
    fontSize: 34,
    marginBottom: 40,
    color: '#ffffff',
    fontStyle: 'bold',
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    
  },
  buttonText: {
    color: '#ffffff',
    fontStyle: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  titulo: {
    fontSize: 22,
    position: 'absolute',
    top: 40,
    left: 20,
  },
});

export default Home;
