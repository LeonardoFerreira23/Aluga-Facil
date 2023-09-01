import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
  return (
   
    <TouchableOpacity onPress={()=> navigation.goBack()}>
        <ChevronLeftIcon size="25" color="black" />
    </TouchableOpacity>

  );
}