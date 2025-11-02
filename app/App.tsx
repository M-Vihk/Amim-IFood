import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Amim</Text>
      </View>

      {/* Conteúdo principal */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Cadastro</Text>

        {/* Campos de entrada */}
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#fff" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#fff" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirmar senha" placeholderTextColor="#fff" secureTextEntry />
        <TextInput style={styles.input} placeholder="dd/mm/aaaa" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Selecione o gênero" placeholderTextColor="#fff" />

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee8f2', 
  },
  header: {
    backgroundColor: '#ff95a5ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff4da6',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fdd0e5',
    borderRadius: 25,
    padding: 12,
    marginVertical: 6,
    color: '#646464ff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff4da6',
    paddingVertical: 14,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
