import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test1 from "./screens/Test1";
import Test2 from "./screens/Test2";
import Test3 from "./screens/Test3";
import Test4, {MultiplyExample} from "./screens/Test4";
import React from "react";
import Calculator from "./screens/Test5";


export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/>
      {/*<MultiplyExample/>*/}
      <StatusBar style="auto" />
    </View>
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
