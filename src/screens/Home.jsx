import * as React from 'react';

import { View, Button } from 'react-native';

import Header from '../components/Header';

import styles from '../styles/styles';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title='Home' />
            <View style={styles.center}>
                <Button title='Informações do dispositivo' onPress={() => navigation.navigate('DeviceInfo')} />
                <Button title='Informações da bateria' onPress={() => navigation.navigate('BatteryInfo')} />
            </View>
        </View>
    )
};

export default Home;