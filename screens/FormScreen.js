import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React , {useState} from 'react';
import BackButton from '../components/BackButton';
import { HomeIcon } from 'react-native-heroicons/outline';
import { useForm, Controller } from 'react-hook-form';

export default function TestScreen() {
    const[username, setUsername] = useState("")
    const[cpf, setCpf] = useState("")
    const[idade, setIdade] = useState("")
  
    function handleSignIn(){
      if(username === '' || email === '' || password === ''){
        alert("SENHA GERADA: 1234")
        return;
      }
  
      const data = {
        username,
        email,
        password,
      }
    }


  return (
    <SafeAreaView className="w-full h-full justify-start bg-[#F8EDEB] flex-1 items-center px-18">
      <View className="absolute ml-1 top-3 left-0">
            <BackButton />
        </View>



      <View className="flex-row items-center justify-center space-x-2">
        <HomeIcon size ={20} color="black"/>
        <Text className="mt-10 text-2xl font-bold mb-10 text-black">
            Formulário de agendamento
        </Text>
      </View>

    {/* Formulario de agendamento */}
    <ScrollView className="w-full">      
        <Text className="text-black font-bold ml-4 text-lg">
          Nome Completo
        </Text>
        <TextInput 
        className="w-full p-4 bg-white text-black mb-3 rounded-2xl"
        onChangeText={setUsername}
        value={username}
        placeholder='Insira seu nome completo'
        />

        <Text className="text-black font-bold ml-4 text-lg mt-3">
          CPF
        </Text>
        <TextInput 
        className="w-full p-4 bg-white text-black mb-3 rounded-2xl"
        onChangeText={setCpf}
        value={cpf}
        placeholder='Insira seu CPF'
        />

        <Text className="text-black font-bold ml-4 text-lg mt-3">
          Data de nascimento
        </Text>
        <TextInput 
        className="w-full p-4 bg-white text-black mb-3 rounded-2xl"
        onChangeText={setIdade}
        value={idade}
        placeholder='DD/MM/YY'
        />

        <Text className="text-black font-bold ml-4 text-lg mt-3">
          Documento de identificação
        </Text>
        <TextInput 
        className="w-full h-40 bg-white text-gray-700 mb-3 rounded-2xl"
        onChangeText={setIdade}
        value={idade}
        placeholder='Insira uma foto do seu documento'
        />

      </ScrollView>

    {/* botão de continuar para próxima tela */}
      <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        onPress={handleSignIn} 
        className="bg-[#fec89a] flew-row justify-between items-center mx-5 rounded-full p-4 py-2 shadow-lg ">
          <Text className="font-extrabold text-neutral-700 text-lg">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


