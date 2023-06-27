import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { ScrollView, Button, View, Text } from "react-native";

import PersiapanPage from "../pages/PersiapanPage";
import PengenalanPage from "../pages/PengenalanPage";
import StrukturPage from "../pages/StrukturPage";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={MainStackNavigator} options={{
        title: 'Home',
        headerTitle: () => <Text>Homesss</Text>,
        headerRight: () => (
          <View style={tw}>
            <Icon name="bell" size={20} color="#fff" />
          </View>
        ),
      }}/>
      <Drawer.Screen name="PersiapanPage" component={PersiapanPage} />
      <Drawer.Screen name="PengenalanPage" component={PengenalanPage} />
      <Drawer.Screen name="StrukturPage" component={StrukturPage} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;