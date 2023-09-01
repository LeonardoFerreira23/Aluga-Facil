import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid'
import BackButton from '../components/BackButton';

const App = () => {
  const [randomCode, setRandomCode] = useState('');

  const generateRandomCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000); // Gera um número aleatório de 4 dígitos
    setRandomCode(code.toString());
  };

  return (
    <View style={styles.container}>
        <View className="absolute ml-1 top-3 left-0">
                    <BackButton />
                </View> 
      <Text style={styles.code}>{randomCode}</Text>
      <Button title="Gerar Código" onPress={generateRandomCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default App;



