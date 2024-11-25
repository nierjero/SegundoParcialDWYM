import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamsScreen from './app/screens/TeamsScreen';
import TeamDetailsScreen from './app/screens/TeamDetailsScreen';
import EditTeamScreen from './app/screens/EditTeamScreen';
import AddTeamScreen from './app/screens/AddTeamScreen';  
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Teams" 
          component={TeamsScreen} 
          options={{ title: 'Equipos' }}
        />
        <Stack.Screen 
          name="AddTeam"  
          component={AddTeamScreen}  
          options={{ title: 'Agregar Equipo' }}
        />
        <Stack.Screen 
          name="TeamDetails" 
          component={TeamDetailsScreen} 
          options={{ title: 'Detalles del Equipo' }}
        />
        <Stack.Screen 
          name="EditTeam" 
          component={EditTeamScreen} 
          options={{ title: 'Editar Equipo' }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
