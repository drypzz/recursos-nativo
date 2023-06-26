import * as React from 'react';
import { View, Button } from 'react-native';

import styles from '../styles/styles';

const Footer = ({ navigation }) => {
    return (
        <View>
            <View style={styles.footer}>
                <Button title='Sair' onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

export default Footer;