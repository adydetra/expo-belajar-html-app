import "react-native-gesture-handler";
import * as React from "react";
import { useCallback } from 'react';
import { SafeAreaView, View, Text, Image } from "react-native";
import { useFonts } from 'expo-font';
import tw from 'twrnc';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from "./pages/HomePage";
import PersiapanPage from "./pages/PersiapanPage";
import PengenalanPage from "./pages/PengenalanPage";
import StrukturPage from "./pages/StrukturPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
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

  const navigatorOptionStyle = {
    drawerActiveTintColor: 'rgb(251 146 60)',
    drawerActiveBackgroundColor: 'rgb(75 85 99)',
    drawerInactiveTintColor: '#aaa',
    drawerInactiveBackgroundColor: 'transparent',
    drawerStyle: {
      backgroundColor: 'rgb(17 24 39)',
      width: 260,
    },
    headerTitleStyle: {
      fontFamily: "PoppinsRegular",
    },
    headerStyle: {
      backgroundColor: 'rgb(251 146 60)',
    },
    headerTitleAlign: 'center',
  };

  const screenOptionStyle = {
    headerTitle: () => <Image source={require('./assets/html.png')} />,
    headerRight: () => <Text style={tw`mr-3`}>Dev Dewa 🚀</Text>,
  };

  return (
    <NavigationContainer style={tw`bg-orange-500`}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={navigatorOptionStyle}>
        <Drawer.Screen name="Home" component={HomePage} options={screenOptionStyle} />
        <Drawer.Screen name="1. Persiapan" component={PersiapanPage} options={screenOptionStyle}/>
        <Drawer.Screen name="2. Pengenalan HTML" component={PengenalanPage} options={screenOptionStyle}/>
        <Drawer.Screen name="3. Struktur HTML" component={StrukturPage} options={screenOptionStyle}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};