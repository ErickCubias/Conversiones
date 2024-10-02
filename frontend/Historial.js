import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Historial = () => {
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem('conversionHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem('conversionHistory');
      setHistory([]); // Limpiar el estado local inmediatamente
      console.log("Historial eliminado");
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadHistory();
    }, 1000); // Cargar cada segundo

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Conversiones</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
      <Button title="Eliminar Historial" onPress={clearHistory} color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 20,
  },
});

export default Historial;
