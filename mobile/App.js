import React, { useState, useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserNameView from './View/UserNameView';
import RoomView from './View/RoomView';
import MenuView from './View/MenuView';
import LobbyView from './View/LobbyView';
import GameView from './View/GameView';
import ScoreBoardView from './View/ScoreBoardView';

export const AuthContext = React.createContext();
export const SocketContext = React.createContext();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [playerName, setPlayerName] = useState(null);
  const socket = useRef(null);
  const [currentRoomId, setCurrentRoomId] = useState(null);

  return (
    <SocketContext.Provider value={{ socket, currentRoomId, setCurrentRoomId }}>
      <AuthContext.Provider value={{ playerName, setPlayerName }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="UserNameView">
            <Stack.Screen name="UserNameView" options={{ title: 'Username' }} component={UserNameView} />
            <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
            <Stack.Screen name="MenuView" options={{ title: 'Menu' }} component={MenuView} />
            <Stack.Screen name="LobbyView" options={{ title: 'Lobby' }} component={LobbyView} />
            <Stack.Screen name="GameView" options={{ title: 'Game' }} component={GameView} />
            <Stack.Screen name="RoomView" options={{ title: 'Room' }} component={RoomView} />
            <Stack.Screen name="ScoreBoardView" options={{ title: 'Scoreboard' }} component={ScoreBoardView} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SocketContext.Provider>
  );
}

export default App;
