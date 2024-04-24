import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';

const InvitationPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const sendInvitation = () => {
    
    console.log('Convite enviado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Convite</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Evento"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data do Evento"
        value={eventDate}
        onChangeText={text => setEventDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Local do Evento"
        value={eventLocation}
        onChangeText={text => setEventLocation(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        placeholder="Descrição do Evento"
        value={eventDescription}
        onChangeText={text => setEventDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={sendInvitation}>
        <Text style={styles.buttonText}>Enviar Convite</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff', 
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InvitationPage;
