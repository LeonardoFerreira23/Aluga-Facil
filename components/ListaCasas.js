import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { CasaInfos } from '../constants'
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import HouseScreen from '../screens/HouseScreen';

export default function ListaCasas() {
    const navigation = useNavigation();
  return (

    <View className="mx-4 justify-between flex-col">
      {
        CasaInfos.map((item, index)=>{
            return(
                <CasaCard navigation={navigation} item={item} key={index} />
            )
        }

        )
      }
    </View>
  );
}

const CasaCard = ({item, navigation})=>{
    return (
        <SafeAreaView className="items-center">
            <TouchableOpacity
                onPress={()=> navigation.navigate('HouseScreen',{...item})} 
                style={{width: 320, height: 300}} 
                className="bg-white rounded-lg p-3 m-2 items-start">
                <Image source={item.image} 
                    style={{width: 300, height: 200}} 
                    className="rounded-lg" />
            <View className="p-3 flex-col">
                <Text className={`${colors.heading} font-bold`}>{item.valor}</Text>
                <Text className={`${colors.heading} text-xs`}>{item.locatario}</Text>
                <Text className={`${colors.heading} text-xs`}>{item.local}</Text>
            </View>

            </TouchableOpacity>
                   
        </SafeAreaView>
    );
}
