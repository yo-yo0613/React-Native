import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title='Click Me' onPress={()=>console.log("load")}></Button>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
