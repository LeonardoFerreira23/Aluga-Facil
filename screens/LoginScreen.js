import React from 'react';
import { Text, View, themeColors, Image, TouchableOpacity, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

let login = require('../assets/images/Login3.png')


export default function LoginScreen() {
  const navigation = useNavigation();
  return (

      <SafeAreaView className="flex-1 mb- bg-[#F4DADB]">
        <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.goBack()}
                className="bg-white p-5 rounded-tr-2xl rounded-bl-2xl ml-4"
                >
                <ArrowLeftIcon size="20" color="black"/>
            </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={login}
          style={{width: 300, height: 200}} />
        </View>


      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
        <View
          className="form space-y-2">
            <Text 
              className="text-gray-700 ml-4">
                Endereço de E-Mail
              </Text>
              <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                  placeholder="email"
                  value="fernanda@gmail.com"
              />

            <Text 
              className="text-gray-700 ml-4">
                Senha
              </Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              value="test12345" 
            />

            <TouchableOpacity
              className="flex items-end">
                <Text
                  className="text-gray-700 mb-5">
                    Esqueceu a Senha?
                  </Text>
            </TouchableOpacity>

            
          </View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('HomeScreen')}
              className="py-3 bg-red-100 round-x1">
                <Text 
                  className="text-x1 font-bold text-center text-gray-700">
                    Login
                  </Text>
              </TouchableOpacity>
        </View>

        </SafeAreaView>




  )
}



