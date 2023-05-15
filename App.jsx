import React from 'react';
import { View } from 'react-native';
import DeviceInfo from './src/screens/DeviceInfo';
import styles from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <DeviceInfo />
    </View>
  );
}
