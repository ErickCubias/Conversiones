import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Peso = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kilogramos');
  const [toUnit, setToUnit] = useState('libras');
  const [resultMessage, setResultMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const convertWeight = async () => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      alert('Por favor, ingresa un número válido');
      return;
    }

    if (fromUnit === toUnit) {
      setWarningMessage('Has seleccionado las mismas unidades.');
      setResultMessage('');
      return;
    } else {
      setWarningMessage('');
    }

    let convertedValue;
    if (fromUnit === 'kilogramos' && toUnit === 'libras') {
      convertedValue = numericValue * 2.20462; // Kilogramos a Libras
    } else if (fromUnit === 'libras' && toUnit === 'kilogramos') {
      convertedValue = numericValue / 2.20462; // Libras a Kilogramos
    }

    const message = `Peso:
    ${value} ${fromUnit} es igual a: ${convertedValue.toFixed(2)} ${toUnit}.`;
    setResultMessage(message);

    if (fromUnit !== toUnit) {
      await saveToHistory(message);
    }
  };

  const saveToHistory = async (message) => {
    try {
      const storedHistory = await AsyncStorage.getItem('conversionHistory');
      const history = storedHistory ? JSON.parse(storedHistory) : [];
      history.push(message);
      await AsyncStorage.setItem('conversionHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving to history:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversión de Peso</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el valor"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <Text style={styles.title}>DE</Text>
      <Picker
        selectedValue={fromUnit}
        style={styles.picker}
        onValueChange={(itemValue) => setFromUnit(itemValue)}
      >
        <Picker.Item label="Kilogramos" value="kilogramos" />
        <Picker.Item label="Libras" value="libras" />
      </Picker>
      <Text style={styles.title}>A</Text>
      <Picker
        selectedValue={toUnit}
        style={styles.picker}
        onValueChange={(itemValue) => setToUnit(itemValue)}
      >
        <Picker.Item label="Kilogramos" value="kilogramos" />
        <Picker.Item label="Libras" value="libras" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={convertWeight}>
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>
      {warningMessage && <Text style={styles.warning}>{warningMessage}</Text>}
      {resultMessage && <Text style={styles.result}>{resultMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d4c4c',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffffff',
  },
  warning: {
    marginTop: 10,
    fontSize: 18,
    color: '#ffffff',
  },
});

export default Peso;
