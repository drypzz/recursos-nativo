import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useState } from 'react';

import { View, Button, ScrollView } from 'react-native';

import styles from '../styles/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyScreenOrientation(){

    const [getBackgroundColor, setBackgroundColor] = useState('#fff');

    async function defaultOrientation(type) {
        if(type === 'ALL'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.ALL
            );
            setBackgroundColor('rgba(0, 255, 0, .5)');
        }else if(type === 'PORTRAIT'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
            );
            setBackgroundColor('rgba(0, 155, 0, .5)');
        }else if(type === 'PORTRAIT_UP'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
            setBackgroundColor('rgba(0, 55, 0, .5)');
        }else if(type === 'PORTRAIT_DOWN'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_DOWN
            );
            setBackgroundColor('rgba(0, 100, 0, .5)');
        }else if(type === 'LANDSCAPE'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
            );
            setBackgroundColor('rgba(55, 55, 0, .5)');
        }else if(type === 'LANDSCAPE_LEFT'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
            );
            setBackgroundColor('rgba(100, 155, 0, .5)');
        }else if(type === 'LANDSCAPE_RIGHT'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
            );
            setBackgroundColor('rgba(120, 90, 0, .5)');
        }else if(type === 'OTHER'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.OTHER
            );
            setBackgroundColor('rgba(190, 55, 100, .5)');
        }else if(type === 'UNKNOWN'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.UNKNOWN
            );
            setBackgroundColor('rgba(255, 100, 10, .5)');
        }else{
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.DEFAULT
            );
            setBackgroundColor('rgba(255, 255, 255, .5)');
        };
    };

    return (
        <ScrollView style={[styles.container, {backgroundColor: `${getBackgroundColor}`}]}>
            <View style={styles.container}>
                <Header title='Orientação de Tela' />
                    <View style={styles.center}>
                        <Button title='DEFAULT' onPress={() => defaultOrientation()} />
                        <Button title='ALL' onPress={() => defaultOrientation('ALL')} />
                        <Button title='PORTRAIT' onPress={() => defaultOrientation('PORTRAIT')} />
                        <Button title='PORTRAIT_UP' onPress={() => defaultOrientation('PORTRAIT_UP')} />
                        <Button title='PORTRAIT_DOWN' onPress={() => defaultOrientation('PORTRAIT_DOWN')} />
                        <Button title='LANDSCAPE' onPress={() => defaultOrientation('LANDSCAPE')} />
                        <Button title='LANDSCAPE_LEFT' onPress={() => defaultOrientation('LANDSCAPE_LEFT')} />
                        <Button title='LANDSCAPE_RIGHT' onPress={() => defaultOrientation('LANDSCAPE_RIGHT')} />
                        <Button title='OTHER' onPress={() => defaultOrientation('OTHER')} />
                        <Button title='UNKNOWN' onPress={() => defaultOrientation('UNKNOWN')} />
                    </View>
                <Footer text='Sair' />
            </View>
        </ScrollView>
    )
};

export default MyScreenOrientation;