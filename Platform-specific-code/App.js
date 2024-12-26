// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Button, StatusBar, Platform, } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Button title='Click Me' onPress={()=>console.log("load")}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,   
  },
});
