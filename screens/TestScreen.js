import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ListaCasas from '../components/ListaCasas';

export default function TestScreen() {
  return (
    <SafeAreaView>
      <ListaCasas />
    </SafeAreaView>
  );
}