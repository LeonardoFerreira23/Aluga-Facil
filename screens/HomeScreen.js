import React from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, TextInput, StatusBar, ScrollView} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import randomImage from '../assets/images/randomImage';
import { HeartIcon, MagnifyingGlassIcon, UserCircleIcon } from 'react-native-heroicons/outline';
import { categorias, items } from '../constants';
import { useNavigation } from '@react-navigation/native';
import HouseScreen from './HouseScreen';
import ListaCasas from '../components/ListaCasas';


export default function HomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#fcd5ce]">

      <View className="flex-row justify-between items-center p-3 bg-white ">
        <TouchableOpacity className ="pt-1">
              <UserCircleIcon color="gray" fill="white" size ="35"/>
          </TouchableOpacity>
          <Text className="text-2xl">
            Aluga Facil
          </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Sair</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar barStyle="dark-content"/>
      <View className="flex-row items-center space-x-2 px-4 pb-2 bg-white ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 h-15">
          <MagnifyingGlassIcon size ={20} color="gray"/>
          <TextInput placeholder='Buscar' className="ml-2 flex-1 h-5 py-0"/>
        </View>
      </View>

      {/* categorias */}
      <View  className="px-5 items-center bg-white">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categorias}
          keyExtractor={item=> item.id}
          className="overflow-visible"
          renderItem={({item})=>{
            return(
              <TouchableOpacity
                className="bg-gray-100 p-2 px-5 rounded-full mr-3 mb-2 shadow justify-center"
              >
                <Text className="font-semibold">
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
        }}
        />
      </View>

      <ScrollView> 
        <ListaCasas />
      </ScrollView>

      
    </SafeAreaView>
  );
}

