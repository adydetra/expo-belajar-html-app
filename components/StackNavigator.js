import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import PersiapanPage from "../pages/PersiapanPage";
import PengenalanPage from "../pages/PengenalanPage";
import StrukturPage from "../pages/StrukturPage";
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="PersiapanPage" component={PersiapanPage} />
      <Stack.Screen name="PengenalanPage" component={PengenalanPage} />
      <Stack.Screen name="StrukturPage" component={StrukturPage} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator };