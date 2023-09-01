import React from 'react';
import { Text, View, StatusBar} from 'react-native';


export default function screenWrapper({children}) {
    let statusBarHeight = StatusBar.currentHeight;
  return (
    <View style ={{paddingTop: statusBarHeight}}>
    {
        children
    }
    </View>
  );
}

