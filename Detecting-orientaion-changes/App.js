import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: 'dodgerblue', 
                    width: "100%",
                    height: landscape ? '100%' : '30%'}}>
      </View>
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
