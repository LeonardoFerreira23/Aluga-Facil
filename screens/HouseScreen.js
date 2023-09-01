import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView} from 'react-native';
import React from 'react';
import CardHouse from '../components/CardHouse';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import { CasaInfos } from '../constants';

export default function HouseScreen(props){
    const item = props.route.params;

    return(

        <SafeAreaView className="w-full h-full">
            <CardHouse />    
            <View className="object-cover">
                    <Image source={item.image}
                    style={{width: 500, height: 400}}
                    />
            </View>

        <View className="absolute ml-1 top-3 left-0">
            <BackButton />
        </View>

        <View 
        style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
        className="px-5 flex flex-1 justify-between bg-white pt-4 -mt-14">
            <ScrollView showsHorizontalScrollIndicator={false} className ="space-y-2">
                <View className="flex-row justify-between items-start">
                    <Text 
                    style ={{fontSize: 20}}
                    className="font-bold flex-1 text-neutral-700">
                        {item?.titulo}
                    </Text>
                    <Text
                    style ={{fontSize: 20}}
                    className="font-semibold"
                    >
                        {item?.valor}
                    </Text>
                </View>

                <View className="flex-col pt-1">
                    <Text
                    style ={{fontSize: 20}}
                    className="font-bold flex-1 text-neutral-700"
                    >
                        {item?.locatario}
                    </Text>

                    <Text
                    style ={{fontSize: 16}}
                    className="text-neutral-700 tracking-wide mb-2 pt-2"
                    >
                        {item?.desc}
                    </Text>

                    <Text
                    style ={{fontSize: 16}}
                    className="text-neutral-700 font-bold tracking-wide mb-2 pt-2"
                    >
                        {item?.local}
                    </Text>
                </View>
                

        
            </ScrollView>
        </View>
    </SafeAreaView>
        );
}