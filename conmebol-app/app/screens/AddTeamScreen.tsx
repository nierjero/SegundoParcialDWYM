import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AddTeamScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState('');
  const [goals, setGoals] = useState('');

  const handleAddTeam = async () => {
    if (!name || !description || !points || !goals) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    try {
      await fetch('http://161.35.143.238:8000/jgonzalez', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          description,
          points: parseInt(points, 10),
          goals: parseInt(goals, 10),
        }),
      });
      Alert.alert('Éxito', 'Equipo agregado correctamente.');
      navigation.goBack(); 
    } catch (error) {
      console.error('Error al agregar el equipo:', error);
      Alert.alert('Error', 'Hubo un problema al agregar el equipo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Nuevo Equipo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del equipo"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Puntos"
        value={points}
        keyboardType="numeric"
        onChangeText={setPoints}
      />

      <TextInput
        style={styles.input}
        placeholder="Goles"
        value={goals}
        keyboardType="numeric"
        onChangeText={setGoals}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTeam}>
        <Text style={styles.buttonText}>Agregar Equipo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
