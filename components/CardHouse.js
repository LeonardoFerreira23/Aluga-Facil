import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function CardHouse() {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50 ">
        <TouchableOpacity 
            onPress={()=> navigation.navigate('CodeScreen')}
            className="bg-[#fee2e2] flew-row justify-between items-center mx-5 rounded-full p-4 py-2 shadow-lg">
          <View className="p-2 px-4 rounded-full ">
              <Text className="font-extrabold text-neutral-700 text-lg">
                  Agende uma visita!
              </Text>
          </View>
        </TouchableOpacity>
    </View> 
  );
}