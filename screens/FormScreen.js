import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React , {useState} from 'react';
import BackButton from '../components/BackButton';
import { HomeIcon } from 'react-native-heroicons/outline';


export default function TestScreen() {
  const[username, setUsername] = useState("")
  const[cpf, setCpf] = useState("")
  const[idade, setIdade] = useState("")

  function handleSignIn(){
    if(username === '' || email === '' || password === ''){
      alert("PREENCHA OS CAMPOS")
      return;
    }

    const data = {
      username,
      email,
      password,
    }

    console.log(data);
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

    <View className="w-full">      
        <Text className="text-black font-bold ml-4 text-lg">
          Nome Completo
        </Text>
        <TextInput 
        className="w-full p-4 bg-white text-gray-700 mb-3 rounded-2xl"
        onChangeText={setUsername}
        value={username}
        placeholder='Insira seu nome completo'
        />

        <Text className="text-black font-bold ml-4 text-lg mt-3">
          CPF
        </Text>
        <TextInput 
        className="w-full p-4 bg-white text-gray-700 mb-3 rounded-2xl"
        onChangeText={setCpf}
        value={cpf}
        placeholder='Insira seu CPF'
        />

        <Text className="text-black font-bold ml-4 text-lg mt-3">
          Data de nascimento
        </Text>
        <TextInput 
        className="w-full p-4 bg-white text-gray-700 mb-3 rounded-2xl"
        onChangeText={setIdade}
        value={idade}
        placeholder='DD/MM/YY'
        />
      </View>

      <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity className="bg-[#fec89a] flew-row justify-between items-center mx-5 rounded-full p-4 py-2 shadow-lg ">
          <Text className="font-extrabold text-neutral-700 text-lg">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  button:{
    width: '100%',
    height: 40,
    backgroundColor: '#E4908A',
    borderRadius: 4,
    justifyContent: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  labelError:{
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  },
});