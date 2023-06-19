import * as Contacts from 'expo-contacts';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
// import Footer from '../components/footer';

import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native-web';

import styles from '../styles/styles';


const  ContactsInfo = () => {
    const [contacts, setContacts] = useState([{}]);

    async function loadContacts(){
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails,
                Contacts.Fields.PhoneNumbers
            ]
        })
        setContacts(data);
        console.log(contacts);
    }

    useEffect((
        useCallback(() => {(
            async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    loadContacts();
                }
            })
        })
    ), []);

    return(
        <View style={styles.container}>
            <View  style={styles.container}>
                <Header title='Contato' />
                <View style={styles.center}>
                    {contacts ?
                        <FlatList
                            style={{gap: 10, flex: 1}} 
                            data={ contacts }
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Itens 
                                    item = {item}
                                />
                            )}
                        />
                    :
                        <>
                            <Text style={styles.content}>Nada</Text>
                        </>
                    }
                </View>
            </View>
        </View>
    )
}

export default ContactsInfo;
