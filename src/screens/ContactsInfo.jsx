import * as Contacts from 'expo-contacts';
import React, { useCallback, useEffect, useState } from 'react';

import { View, Text, FlatList, TextInput } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from '../components/Items';

import styles from '../styles/styles';

const ContactsInfo = () => {
    const [contacts, setContacts] = useState();
    const [filteredContacts, setFilteredContacts] = useState([]);

    const filterContacts = (searchText) => {
        const filtered = contacts.filter((contact) => {
            const name = `${contact.firstName}`.toLowerCase();
            const phone = `${contact.phoneNumbers[0].number}`.toLowerCase();
            
            return name.includes(searchText.toLowerCase()) || phone.includes(searchText.toLowerCase());
        });
        
        setFilteredContacts(filtered);
    };

    useEffect(() => {
        const loadContacts = async () => {
            const { status } = await Contacts.requestPermissionsAsync();

            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContacts(data);
                    setFilteredContacts(data);
                }
            }
        };

        loadContacts();
    }, []);

    return(
        <View  style={styles.container}>
            <Header title='Contato' />
            <View style={styles.center}>
            <TextInput placeholder='Search' onChangeText={filterContacts} style={{ paddingHorizontal: 5, paddingVertical: 2, borderBottomWidth: 1, borderBottomColor: '#000' }} />
                {contacts ?
                    <FlatList
                        data={filteredContacts}
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
