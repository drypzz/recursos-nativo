import React from 'react';
import { View } from 'react-native';

import styles from './src/styles/styles';

import DeviceInfo from './src/screens/DeviceInfo';
import BatteryInfo from './src/screens/BatteryInfo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DeviceInfo /> */}
      <BatteryInfo />
    </View>
  );
}