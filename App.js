import "react-native-gesture-handler";
import * as React from "react";
import { useCallback } from 'react';
import { SafeAreaView, View, Text } from "react-native";
import { useFonts } from 'expo-font';
import tw from 'twrnc';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from "./pages/HomePage";
import PersiapanPage from "./pages/PersiapanPage";
import PengenalanPage from "./pages/PengenalanPage";
import StrukturPage from "./pages/StrukturPage";

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
        <DrawerItem label="" style={tw`bg-orange-100 -mx-2`}/>
        {/* <DrawerItem label="1. Persiapan" style={tw``} onPress={() => {
              props.navigate('PersiapanPage');
            }}/>
        <DrawerItem label="2. Pengenalan HTML" style={tw``}/>
        <DrawerItem label="3. Struktur HTML" style={tw``}/> */}
      </View>     
    </DrawerContentScrollView>
  );
}

export default function App(props) {
  
  const [fontsLoaded] = useFonts({
    'PoppinsRegular': require('./assets/fonts/PoppinsRegular.ttf'),
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
    <NavigationContainer style={tw`bg-orange-500`}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'rgb(255 247 237)',
            width: 260,
          },
          headerTitleStyle: {
            fontFamily: "PoppinsRegular"
          },
          headerStyle: {
            backgroundColor: 'rgb(251 146 60)',
          },
          headerTitleAlign: 'center',
        }}>
        <Drawer.Screen name="Home" component={HomePage} options={{ headerTitle: 'Belajar HTML' }} />
        <Drawer.Screen name="1. Persiapan" component={PersiapanPage} />
        <Drawer.Screen name="2. Pengenalan HTML" component={PengenalanPage} />
        <Drawer.Screen name="3. Struktur HTML" component={StrukturPage} />
     
      </Drawer.Navigator>
    </NavigationContainer>
  );
};