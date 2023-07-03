import * as Contacts from 'expo-contacts';
import React, { useCallback, useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from '../components/Items';

import styles from '../styles/styles';

const ContactsInfo = () => {
    const [contacts, setContacts] = useState();
    const [filteredContacts, setFilteredContacts] = useState([]);

    async function loadContacts(){
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails,
                Contacts.Fields.PhoneNumbers
            ]
        })

        if (data.length > 0) {
            setContacts(data);
            setFilteredContacts(data);
        }
    };

    const filterContacts = (searchText) => {
        const filtered = contacts.filter((contact) => {
            const name = `${contact.firstName} ${contact.lastName}`.toLowerCase();
            return name.includes(searchText.toLowerCase());
        });
        
        setFilteredContacts(filtered);
    };

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
            <TextInput placeholder="Search" onChangeText={filterContacts} style={{ paddingHorizontal: 16, paddingVertical: 8 }} />
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
