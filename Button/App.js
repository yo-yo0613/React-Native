import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView , Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback ,View} from 'react-native';

export default function App() {
  
  const show = () => {
    console.log("Image Loading")
  }  // This function will be called when the image is pressed.

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableNativeFeedback onPress={show}>
        <View style={{
          width: 200,
          height: 70,
          borderRadius: 100,
          backgroundColor: 'dodgerblue',
        }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />/
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
