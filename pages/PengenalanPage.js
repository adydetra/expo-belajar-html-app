import * as React from "react";
import { ScrollView, Button, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';

export default function PengenalanPage() {
  return (
    <ScrollView>
      <View style={tw`px-4 py-6 bg-gray-900`}>
        <View style={tw`p-4 bg-gray-800 rounded-lg`}>
          <StatusBar style="auto" />
          <Text style={tw`text-lg text-orange-400 font-bold mb-4`}># Pengenalan HTML</Text>
          <Text style={tw`text-sm text-white my-2 leading-6`}>
            HTML memang bahasa yang wajib dipelajari, bagi yang mau menjadi web developer.{"\n"}{"\n"}

            Karena…{"\n"}{"\n"}

            HTML merupakan bahasa dasar untuk membuat web.{"\n"}{"\n"}

            Saya yakin, kamu sudah pernah mendengar HTML sebelumnya. Tapi tidak ada salahnya membaca pengenalan ini.{"\n"}{"\n"}

            Pada tutorial ini, kita akan benar-benar membahas dari nol hingga kamu bisa membuat halaman HTML sendiri.{"\n"}{"\n"}

            Baiklah…{"\n"}{"\n"}

            Mari kita mulai!
          </Text>
          <Text style={tw`text-md text-orange-400 font-bold mt-8 mb-4`}>Apa itu HTML?</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            HTML atau HyperText Markup Language merupakan sebuah bahasa markah untuk membuat halaman web.{"\n"}{"\n"}

            Paham kan maksudnya?{"\n"}{"\n"}

            Kalau belum paham, sini saya jelaskan…{"\n"}{"\n"}

            Jadi, HTML itu adalah sebuah bahasa yang menggunakan markup atau penanda untuk membuat halaman web.{"\n"}{"\n"}

            Penanda atau markup ini, nanti akan kita sebut dengan Tag.{"\n"}{"\n"}

            HTML berperan untuk menentukan struktur konten dan tampilan dari sebuah web.{"\n"}{"\n"}

            Kalau kita ibaratkan nih..{"\n"}{"\n"}

            HTML itu seperti batu bata untuk membangun rumah. Batu bata ini dapat disusun, hingga menjadi fondasi dasar.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}