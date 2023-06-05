import * as Notifications from 'expo-notifications';

import React, {useState} from 'react';

import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';
// import Footer from '../components/Footer';
import Header from '../components/Header';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

function Notify(){

    const [expoPushToken, setExpoPushToken] = useState('N/A');

    async function NotifyExpo(){
        const token = await Notifications.scheduleNotificationAsync(
            {
                content: {
                    title: 'Titulo da notificação',
                    body: 'Corpo da notificação',
                    subtitle: 'Subtitulo da notificação',
                    data: {
                        data: 'goes here'
                    },
                },
                trigger: {
                    seconds: 1
                },
            }
        );

        setExpoPushToken(token);
    };

    return (
        <View style={styles.container}>
            <Header title='Notificações' />
                <View style={styles.center}>
                    <Text>Expo Token: {expoPushToken}</Text>

                    <Button title='Enviar Notificação' onPress={async () => NotifyExpo()}/>

                    <Button title='Ler ultima notificações clicada' onPress={() => {}} />

                    <Button title='Ler notificações não clicada' onPress={() => {}} />

                </View>
            {/* <Footer text='Sair' /> */}
        </View>
    )
};

export default Notify;