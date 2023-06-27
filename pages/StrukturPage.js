import * as React from "react";
import { ScrollView, Button, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';

export default function StrukturPage() {
  return (
    <ScrollView>
      <View style={tw`px-4 py-6 bg-gray-900`}>
        <View style={tw`p-4 bg-gray-800 rounded-lg`}>
          <StatusBar style="auto" />
          <Text style={tw`text-lg text-orange-400 font-bold mb-4`}># Struktur Dasar HTML</Text>
          <Text style={tw`text-sm text-white my-2 leading-6`}>
            Dokumen HTML harus memiliki struktur dasar yang terdiri dari 4 bagian utama yaitu: tag DOCTYPE, tag html, tag head, dan tag body.{"\n"}{"\n"}
            Keempat bagian tersebut adalah syarat minimal yang menjadi standar pada struktur global dokumen HTML{"\n"}{"\n"}

            Untuk lebih jelasnya, berikut ini contoh penulisan struktur dasar HTML:
          </Text>
          <Text style={tw`text-lg text-orange-400 font-bold mt-8`}># Penjelasan</Text>
          <Text style={tw`text-md text-orange-400 font-semibold mt-8 mb-4`}>DOCTYPE atau DTD</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            DOCTYPE yang merupakan singkatan dari Document Type Declaration dan juga dikenal sebagai DTD adalah deklarasi dokumen yang digunakan untuk menginfokan tipe dokumen dan versi HTML yang digunakan kepada aplikasi web browser.{"\n"}{"\n"}
            Penulisan DOCTYPE harus berada pada awal dokumen.{"\n"}{"\n"}

            Penulisan DTD atau DOCTYPE ini berada diawal yaitu sebelum tag {"<html>"}.{"\n"}{"\n"}
            Pada versi HTML sebelumnya, penulisan DTD ini lebih panjang dengan menyebutkan URL dan mode halaman yang digunakan namun hal tersebut tidak berlaku untuk HTML5.{"\n"}{"\n"}
            Pada HTML5 penulisan lebih disederhanakan menjadi {"<!DOCTYPE html>"}.
          </Text>
          <Text style={tw`text-md text-orange-400 font-semibold mt-8 mb-4`}>Tag {"<html>"}</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            Tag html digunakan untuk menginformasikan pada aplikasi web browser bahwa tipe dokomen tersebut adalah HTML. Tag html juga menjadi wadah untuk semua elemen HTML.{"\n"}{"\n"}
            Jadi, semua elemen harus berada di dalam tag tersebut kecuali DOCTYPE karena DOCTYPE bukan termasuk elemen melainkan deklarasi dokumen.{"\n"}{"\n"}

            Tag html merupakan tag yang membutuhkan penutup tag.{"\n"}{"\n"}
            Jadi kita harus menutup tag tersebut di akhir dokumen seperti contoh diatas {"<html>"} pada baris ke 2 dan diakhiri dengan {"</html>"}
          </Text>
          <Text style={tw`text-md text-orange-400 font-semibold mt-8 mb-4`}>Tag {"<head>"}</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            Tag head merupakan tag yang berisi informasi tentang halaman yang tidak ditampilkan di halaman web browser.{"\n"}{"\n"}
            Misalnya: source css, js atau lainnya yang berasal dari luar, informasi meta, title, dan lainnya.{"\n"}{"\n"}
            Namun, khusus untuk tag {"<title>"} akan ditampilkan di title bar pada web browser.{"\n"}{"\n"}
            Tag {"<title>"} adalah tag yang berada di dalam head HTML yang berfungsi untuk menampilkan judul halaman web pada title bar web browser.{"\n"}{"\n"}
            Untuk penulisan tag head juga membutuhkan penutup tag. Contoh pada kode di atas, tag {"<head>"} dibuka pada baris ke 3 dan ditutup dengan tag penutup {"</head>"}
          </Text>
          <Text style={tw`text-md text-orange-400 font-semibold mt-8 mb-4`}>Tag {"<body>"}</Text>
          <Text style={tw`text-sm text-white mt-2 mb-1 leading-6`}>
            Tag body merupakan tag yang berisi elemen-elemen yang ditampilkan di halaman web.{"\n"}{"\n"}
            Misalnya teks yang berupa paragraph {"<p>"}, heading {"<h1>"} hingga {"<h6>"}, menampilkan gambar {"<img />"}, membuat tabel {"<table>"}, dan lainnya.{"\n"}{"\n"}
            Di dalam tag body inilah konten visual dari halaman web ditempatkan.{"\n"}{"\n"}

            Penulisan tag body juga perlu penutup tag. Pada contoh di atas, tag {"<body>"} dimulai pada baris ke 6 dan ditutup {"</body>"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}