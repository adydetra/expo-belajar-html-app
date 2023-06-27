import * as React from "react";
import { useCallback } from 'react';
import { ScrollView, View, Text, Button, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import tw from 'twrnc';

export default function HomePage({ navigation }) {

  const [fontsLoaded] = useFonts({
    'PoppinsRegular': require('../assets/fonts/PoppinsRegular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={tw`bg-gray-900 h-full`}>
      <StatusBar style="auto" />
      <View style={tw`flex flex-row flex-wrap my-10 justify-center gap-12`} onLayout={onLayoutRootView}>
        <View style={tw`w-80 h-30 bg-orange-200 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Persiapan</Text>
        </View>
        <View style={tw`w-72 h-30 bg-orange-200 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Pengenalan</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Struktur HTML</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Heading</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Image</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>List</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Table</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Canvas</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>iFrame</Text>
        </View>
        <View style={tw`w-30 h-30 bg-orange-100 items-center justify-center rounded-3`}>
          <Text style={{ fontFamily: 'PoppinsRegular'}}>Form</Text>
        </View>
      </View>
    </ScrollView>
  );
}