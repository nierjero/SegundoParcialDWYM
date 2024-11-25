import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import TeamCard from '../components/TeamCard';

export default function TeamsScreen({ navigation }) {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    try {
      const response = await fetch('http://161.35.143.238:8000/jgonzalez');
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error('Error al obtener los equipos:', error);
      Alert.alert('Error', 'Hubo un problema al cargar los equipos.');
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []); 

  const handleDelete = async (id) => {
    try {
      await fetch(`http://161.35.143.238:8000/jgonzalez/${id}`, {
        method: 'DELETE',
      });
      fetchTeams(); 
      Alert.alert('Éxito', 'Equipo eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar el equipo:', error);
      Alert.alert('Error', 'Hubo un problema al eliminar el equipo.');
    }
  };

  return (
    <View>
      <Button title="Agregar Equipo" onPress={() => navigation.navigate('AddTeam')} />
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TeamCard
            name={item.name}
            description={item.description}
            onPress={() => navigation.navigate('TeamDetails', { teamId: item.id })}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => navigation.navigate('EditTeam', { team: item })} 
          />
        )}
      />
    </View>
  );
}
