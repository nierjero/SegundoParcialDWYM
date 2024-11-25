import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';

export default function TeamDetailsScreen({ route, navigation }) {
  const { teamId } = route.params || {}; 

  useEffect(() => {
    if (!teamId) {
      Alert.alert("Error", "ID del equipo no encontrado.");
      navigation.goBack(); 
    }
  }, [teamId, navigation]);

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTeamDetails = async () => {
    try {
      const response = await fetch(`http://161.35.143.238:8000/jgonzalez/${teamId}`);
      const data = await response.json();
      setTeam(data);
    } catch (error) {
      console.error('Error fetching team details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (teamId) {
      fetchTeamDetails();
    }
  }, [teamId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando detalles del equipo...</Text>
      </View>
    );
  }

  if (!team) {
    return (
      <View style={styles.container}>
        <Text>No se encontró el equipo.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{team.name}</Text>
      <Text style={styles.details}>Descripción: {team.description}</Text>
      <Text style={styles.details}>Puntos: {team.points}</Text>
      <Text style={styles.details}>Goles: {team.goals}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  details: { fontSize: 18, marginBottom: 10 },
});
