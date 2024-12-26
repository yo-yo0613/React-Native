import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View 
      style={{
        backgroundColor: "#fff", 
        flex:1,
        flexDirection: "row", // horizontal 
        justifyContent: "center", // main
        alignItems: "center", // secondary
        alignContent: "center",
        flexWrap: "wrap",
    }}>

      <View style={{
        backgroundColor: "dodgerblue", 
        width: 100,
        height: 300,
      }} />

      <View style={{
        backgroundColor: "gold", 
        width: 100,
        height: 100,
      }} />

      <View style={{
        backgroundColor: "tomato", 
        width: 100,
        height: 100,
      }} />

      <View style={{
        backgroundColor: "gray", 
        width: 100,
        height: 100,
      }} />

      <View style={{
        backgroundColor: "greenyellow", 
        width: 100,
        height: 100,
      }} />

    </View>
  );
}


