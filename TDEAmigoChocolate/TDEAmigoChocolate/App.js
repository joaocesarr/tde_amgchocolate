// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ConviteScreen from './ConviteScreen'; 
import CriarGrupoScreen from './CriarGrupoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Convite" component={ConviteScreen} />
        <Stack.Screen name="CriarGrupo" component={CriarGrupoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
