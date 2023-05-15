import * as React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles';

export default function Header({title}) {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}