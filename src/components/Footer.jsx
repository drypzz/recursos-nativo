import * as React from 'react';
import { View, Button } from 'react-native';

import styles from '../styles/styles';

export default function Footer({text}) {
    return (
        <View>
            <View style={styles.footer}>
                <Button title={text} />
            </View>
        </View>
    )
}