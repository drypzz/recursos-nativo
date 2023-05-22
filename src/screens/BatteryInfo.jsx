import { useEffect, useState } from 'react';
import * as Battery from 'expo-battery';
import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';
// import Footer from '../components/Footer';
import Header from '../components/Header';

export default function BatteryInfo() {

    const [batteryLevel, setBatteryLevel] = useState(0);
    const [getBackground, setBackground] = useState('green');

    async function getUpdateAll() {
        getBatteryLevel()
    };

    async function getBatteryLevel() {
        const result = await Battery.getBatteryLevelAsync();
        setBatteryLevel(Math.round(result * 100))
    };

    function changeBackground() {
        if (batteryLevel < 20) {
            setBackground('red')
        } else if (batteryLevel < 50) {
            setBackground('orange')
        } else if (batteryLevel < 80) {
            setBackground('yellow')
        } else {
            setBackground('green')
        };
    };

    useEffect(() => {
        getBatteryLevel()
        changeBackground()
    }, [batteryLevel]);

    return (
        <View style={styles.container}>
            <Header title='Informações da Bateria' />
            <View style={styles.center}>
                <Text>Nível: {batteryLevel}%</Text>
                <Button title='Atualizar' onPress={getUpdateAll} />
                <View style={[styles.boxBattery, {backgroundColor: getBackground, opacity: .2,}]}></View>
            </View>
            {/* <Footer text='Sair' /> */}
        </View>
    )
};