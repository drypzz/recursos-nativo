import * as Battery from 'expo-battery';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles';

export default function Header( {title} ) {

    const [batteryLevel, setBatteryLevel] = useState(0);
    const [getBackground, setBackground] = useState('#606');

    async function getBatteryLevel() {
        const result = await Battery.getBatteryLevelAsync();
        setBatteryLevel(Math.round(result * 100))
    };

    function changeBackground() {
        if (batteryLevel < 1) {
            setBackground('#f00')
        } else if (batteryLevel < 4) {
            setBackground('#701c1c')
        } else if (batteryLevel < 5) {
            setBackground('#471616')
        } else if (batteryLevel < 29) {
            setBackground('#ffae00')
        } else if (batteryLevel < 30) {
            setBackground('#cf9a15')
        } else if (batteryLevel < 59) {
            setBackground('#cfc615')
        }else{
            setBackground('#606')
        };
    };

    useEffect(() => {
        getBatteryLevel()
        changeBackground()
    }, [batteryLevel]);

    return (
        <View>
            <View style={{paddingTop: 30, backgroundColor: `${getBackground}`, paddingBottom: 5, paddingHorizontal: 5}}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}