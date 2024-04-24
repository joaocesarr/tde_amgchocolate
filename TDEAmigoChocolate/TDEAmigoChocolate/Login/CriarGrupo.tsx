import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const CreateEditGroupScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const saveGroup = () => {
    if (!groupName.trim()) {
      Alert.alert('Erro', 'Por favor, insira um nome para o grupo.');
      return;
    }

    console.log('Nome do Grupo:', groupName);
    console.log('Descrição do Grupo:', groupDescription);
    navigation.goBack();
  };

  const deleteGroup = () => {
    Alert.alert(
      'Excluir Grupo',
      'Tem certeza de que deseja excluir este grupo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: confirmDelete }
      ],
      { cancelable: false }
    );
  };

  const confirmDelete = () => {
    console.log('Grupo excluído:', groupName);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome do Grupo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do grupo"
        value={groupName}
        onChangeText={text => setGroupName(text)}
      />
      <Text style={styles.label}>Descrição do Grupo:</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        placeholder="Digite a descrição do grupo"
        value={groupDescription}
        onChangeText={text => setGroupDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={saveGroup}>
        <Text style={styles.buttonText}>{isEditing ? 'Salvar' : 'Criar Grupo'}</Text>
      </TouchableOpacity>
      {isEditing && (
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteGroup}>
          <Text style={styles.buttonText}>Excluir Grupo</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreateEditGroupScreen;
