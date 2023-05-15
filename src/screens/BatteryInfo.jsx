import { useEffect, useState } from 'react';
import * as Battery from 'expo-battery';
import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function BatteryInfo() {

    const [batteryLevel, setBatteryLevel] = useState(0);

    async function getUpdateAll() {
        getBatteryLevel()
    }

    async function getBatteryLevel() {
        const result = await Battery.getBatteryLevelAsync();
        setBatteryLevel(result * 100)
    }

    useEffect(() => {
        getBatteryLevel()
    }, []);

    return (
        <View style={styles.container}>
            <Header title='Bateria' />
            <View style={styles.center}>
                <Text>Nível: {batteryLevel}%</Text>
                <Button title='Atualizar' onPress={getUpdateAll} />
            </View>
            <Footer text='Sair' />
        </View>
    )
};