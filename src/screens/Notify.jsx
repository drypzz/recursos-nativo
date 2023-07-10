import * as Notifications from 'expo-notifications';

import React, {useEffect, useState} from 'react';

import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';
import Footer from '../components/Footer';
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
    const [counter, setCounter] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    async function NotifyExpo(){
        const token = await Notifications.scheduleNotificationAsync(
            {
                content: {
                    title: 'Titulo da notificação 0' + counter,
                    body: 'Corpo da notificação 0' + counter,
                    subtitle: 'Subtitulo da notificação 0' + counter,
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
        setCounter(counter + 1);
        setButtonDisabled(true);
        setTimeout(() => {
            setButtonDisabled(false)
        }, 10000);
    };

    async function scheduleNotify(time){
        await Notifications.scheduleNotificationAsync({
            content: {
              title: 'Notificação agendada',
              body: 'Corpo da notificação agendada',
              subtitle: 'Subtitulo da notificação agendada',
                data: {
                    data: 'goes here'
                },
            },
            trigger: {
              seconds: time,
              repeats: false,
            },
        });

        alert('Notificação agendada para daqui ' + time + ' segundos');
    };

    const lastNotify = Notifications.useLastNotificationResponse();

    const getLastNotification = async () => {
        return (lastNotify !== null ? alert(lastNotify?.notification?.request?.content?.title + '\n\n' + lastNotify?.notification?.request?.content?.body) : alert('Nenhuma notificação encontrada'))
    };

    useEffect(() => {
        getLastNotification()
    }, [lastNotify]);

    return (
        <View style={styles.container}>
            <Header title='Notificações' />
                <View style={styles.center}>
                    <Text>Expo Token: {expoPushToken}</Text>

                    <Button disabled={buttonDisabled} title='Enviar Notificação' onPress={async () => NotifyExpo()}/>

                    <Button title='Ler ultima notificações clicada' onPress={() => getLastNotification()} />

                    <Button title='Agendar uma notificação para daqui 10 seg.' onPress={() => {scheduleNotify(10)}} />

                </View>
            <Footer text='Sair' />
        </View>
    )
};

export default Notify;