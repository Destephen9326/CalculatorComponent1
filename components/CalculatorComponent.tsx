import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const CalculatorComponent = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState<number | null>(null);
  const [result, setResult] = useState('');

  const calculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      Alert.alert('Error', 'Por favor ingresa números válidos');
      return;
    }

    let res;
    switch (operation) {
      case 1:
        res = numA + numB;
        break;
      case 2:
        res = numA - numB;
        break;
      case 3:
        res = numA * numB;
        break;
      case 4:
        res = numB !== 0 ? numA / numB : 'Error: División por cero';
        break;
      default:
        res = 'Selecciona una operación';
    }

    setResult(`Resultado: ${res}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        placeholder="Número A"
        value={a}
        onChangeText={setA}
        style={styles.input}
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Número B"
        value={b}
        onChangeText={setB}
        style={styles.input}
        placeholderTextColor="#888"
        keyboardType="numeric"
      />

      <View style={styles.buttonGroup}>
        <Button title="SUMAR (+)" onPress={() => setOperation(1)} color="#2196F3" />
        <Button title="RESTAR (-)" onPress={() => setOperation(2)} color="#2196F3" />
        <Button title="MULTIPLICAR (×)" onPress={() => setOperation(3)} color="#2196F3" />
        <Button title="DIVIDIR (÷)" onPress={() => setOperation(4)} color="#2196F3" />
        <Button title="CALCULAR" onPress={calculate} color="#2196F3" />
      </View>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

export default CalculatorComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#000', // fondo oscuro
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    color: '#fff', // texto blanco
  },
  buttonGroup: {
    gap: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 22,
    color: 'limegreen',
    textAlign: 'center',
    marginTop: 20,
  },
});
