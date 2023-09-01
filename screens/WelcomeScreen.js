import{ TouchableOpacity, View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';


export default function WelcomeScreen(){
    const navigation = useNavigation();    
    return (
    
        <SafeAreaView className="flex-1 bg-red-100">
            <View className="flex-1 flex justify-around my-4">
                <Text
                    className="text-gray-700 font-mono font-bold text-5xl text-center">
                    Bem Vindo(a)!
                </Text>
            <View className="flex-row justify-center">
                <Image className="w-90 h-100 ml-12" source={require('../assets/images/Welcome3.png')}/>
                    </View>
                <View className="space-y-4">
            <TouchableOpacity
                 onPress={()=> navigation.navigate('LoginScreen')}
                className="py-3 bg-red-300 mx-7 rounded-xl">
                    <Text 
                    className="text-xl font-bold text-center text-gray-700">
                        Registrar-se
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity
                 onPress={()=> navigation.navigate('Login')}
                className="py-3 bg-red-300 mx-7 rounded-xl">
                    <Text
                        className="text-xl font-bold text-center text-gray-700">
                            Entrar
                        </Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

