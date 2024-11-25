import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EditTeamScreen = ({ route, navigation }) => {
  const { team } = route.params;  

  const [name, setName] = useState(team?.name || ''); 
  const [description, setDescription] = useState(team?.description || '');
  const [points, setPoints] = useState(team?.points?.toString() || '');
  const [goals, setGoals] = useState(team?.goals?.toString() || '');

  const handleSave = async () => {
    const updatedTeam = {
      name,
      description,
      points: parseInt(points, 10),
      goals: parseInt(goals, 10),
    };

    try {
      const response = await fetch(`http://161.35.143.238:8000/jgonzalez/${team.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTeam),
      });

      if (response.ok) {
        Alert.alert('Éxito', 'Equipo actualizado correctamente');
        navigation.goBack();  
      } else {
        Alert.alert('Error', 'No se pudo actualizar el equipo.');
      }
    } catch (error) {
      console.error('Error al actualizar el equipo:', error);
      Alert.alert('Error', 'Ocurrió un problema al actualizar el equipo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Equipo:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Puntos:</Text>
      <TextInput
        style={styles.input}
        value={points}
        keyboardType="numeric"
        onChangeText={setPoints}
      />
      <Text style={styles.label}>Goles:</Text>
      <TextInput
        style={styles.input}
        value={goals}
        keyboardType="numeric"
        onChangeText={setGoals}
      />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default EditTeamScreen;
