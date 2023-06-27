import * as React from "react";
import { ScrollView, Button, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';

export default function PersiapanPage() {
  return (
    <ScrollView>
      <View style={tw`px-4 py-6 bg-gray-900`}>
        <View style={tw`p-4 bg-gray-800 rounded-lg`}>
          <StatusBar style="auto" />
          <Text style={tw`text-lg text-orange-400 font-bold mb-4`}># Peralatan untuk Belajar HTML</Text>
          <Text style={tw`text-sm text-white my-2 leading-6`}>
            Sebelum praktik, kamu harus siapkan beberapa alat yang akan digunakan untuk praktik.{"\n"}{"\n"}
            Adapun peralatan yang harus kamu persiapkan adalah:
          </Text>
          <Text style={tw`text-md text-orange-400 font-bold mt-8 mb-4`}>1. Teks Editor untuk Menulis HTML</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            Teks editor akan kita gunakan untuk menulis kode-kode HTML.{"\n"}{"\n"}
            Kamu bebas menggunakan teks editor apapun.{"\n"}{"\n"}
            Contoh software teks editor:
          </Text>
          <Text style={tw`text-sm text-white mb-2 leading-6`}>
            - Visual Studio Code (Disarankan){"\n"}
            - Sublime Text{"\n"}
            - Notepad ++{"\n"}
            - Vim
          </Text>
          <Text style={tw`text-md text-orange-400 font-bold mt-8 mb-4`}>2. Web Browser untuk Membuka HTML</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            Web browser akan kita gunakan untuk membuka HTML.{"\n"}{"\n"}
            Kamu juga bebas menggunakan web browser apapun.{"\n"}{"\n"}
            Saran saya sih.. gunakan web browser yang terbaru, karena kita juga akan menggunakan HTML versi yang terbaru.{"\n"}{"\n"}
            Contoh software:
          </Text>
          <Text style={tw`text-sm text-white mb-2 leading-6`}>
            - Google Chrome{"\n"}
            - Firefox{"\n"}
            - Brave{"\n"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}