import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

type TeamCardProps = {
  name: string;
  description: string;
  onPress: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export default function TeamCard({ name, description, onPress, onDelete, onEdit }: TeamCardProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress} style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Editar" color="#4CAF50" onPress={onEdit} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Eliminar" color="#ff4d4d" onPress={onDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
    marginRight: 8, 
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  buttonContainer: {
    width: 80, 
    marginLeft: 8, 
  },
});
