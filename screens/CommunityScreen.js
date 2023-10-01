import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton';
import { UserCircleIcon } from 'react-native-heroicons/outline';

export default function TestScreen() {
  return (
    <SafeAreaView className="bg-[#fcd5ce] content-center">
      <ScrollView className="w-full h-full ml-5 ">
        <View className="container w-80 h-64 bg-white justify-center rounded-lg mt-10">

          <View className="absolute left-2 top-3 flex-row">
            <UserCircleIcon color="gray" fill="white" size ="60"/>
            <Text className="text-lg mt-4 ml-1 font-bold"> Leonardo Ferreira </Text>
          </View>
          
          <Text className="text-black text-sm ml-4 mt-16">
            Olá, estou mudando nos próximo mês para santa rita do sapucai. Gostaria de um kitnet para locação. Preferencia contato direto com proprietário.
          </Text>

          <View className="mt-7">
              <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                  value="RESPONDER"
              />
          </View>
        </View>



        <View className="container w-80 h-64 bg-white justify-center rounded-lg mt-10">

          <View className="absolute left-2 top-3 flex-row">
            <UserCircleIcon color="gray" fill="white" size ="60"/>
            <Text className="text-lg mt-4 ml-1 font-bold"> Fernanda Ellen </Text>
          </View>
          
          <Text className="text-black text-sm ml-4 mt-16">
            Boa noite. estou a procura de uma kitnet para estudadantes perto do inatel 
          </Text>

          <View className="mt-7">
              <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                  
                  value="RESPONDER"
              />
          </View>
        </View>


        <View className="container w-80 h-64 bg-white justify-center rounded-lg mt-10">

          <View className="absolute left-2 top-3 flex-row">
            <UserCircleIcon color="gray" fill="white" size ="60"/>
            <Text className="text-lg mt-4 ml-1 font-bold"> Rogerio Tilapia </Text>
          </View>
          
          <Text className="text-black text-sm ml-4 mt-16">
            Procuro apartamento com 3 quartos e área de serviço, próximo ao centro.
          </Text>

          <View className="mt-7">
              <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                  
                  value="RESPONDER"
              />
          </View>
        </View>




        

        </ScrollView>
        <View className="absolute ml-2 top-3 left-0">
            <BackButton />
        </View>
    </SafeAreaView>
  )
}