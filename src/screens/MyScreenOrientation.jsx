import * as ScreenOrientation from 'expo-screen-orientation';

import { View, Button, ScrollView } from 'react-native';

import styles from '../styles/styles';
// import Footer from '../components/Footer';
import Header from '../components/Header';

function MyScreenOrientation(){

    async function defaultOrientation(type) {
        if(type === 'ALL'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.ALL
            );
        }else if(type === 'PORTRAIT'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
            );
        }else if(type === 'PORTRAIT_UP'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
        }else if(type === 'PORTRAIT_DOWN'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_DOWN
            );
        }else if(type === 'LANDSCAPE'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
            );
        }else if(type === 'LANDSCAPE_LEFT'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
            );
        }else if(type === 'LANDSCAPE_RIGHT'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
            );
        }else if(type === 'OTHER'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.OTHER
            );
        }else if(type === 'UNKNOWN'){
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.UNKNOWN
            );
        }else{
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.DEFAULT
            );
        };
    };

    return (
        <ScrollView style={styles.container}>
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
                {/* <Footer text='Sair' /> */}
            </View>
        </ScrollView>
    )
};

export default MyScreenOrientation;