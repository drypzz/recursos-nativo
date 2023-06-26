import * as Contacts from 'expo-contacts';

import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { useCallback, useState } from 'react';

import styles from '../styles/styles';

import Items from '../components/Items';


const ContactsInfo = () => {
    const [contacts, setContacts] = useState();

    async function loadContacts(){
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails,
                Contacts.Fields.PhoneNumbers
            ]
        })
        setContacts(data);
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    await loadContacts();
                }
            })();
        }, [])
    );

    return(
        <View  style={styles.container}>
            <Header title='Contato' />
            <View style={styles.center}>
                {contacts ?
                    <FlatList
                        style={{gap: 10, flex: 1}} 
                        data={ contacts }
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Items 
                                item = {item}
                            />
                        )}
                    />
                :
                    <>
                        <Text style={styles.content}>Não foi possivel carregar os itens.</Text>
                    </>
                }
            </View>
            <Footer text='Sair' />
        </View>
    )
}

export default ContactsInfo;
