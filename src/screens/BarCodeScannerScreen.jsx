import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

import {osName} from 'expo-device';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/styles';

const BarCodeScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scannedData, setScannedData] = useState(null);

    const handleBarCodeScanned = ({ data }) => {
        setScannedData(data);
    };
    
    useEffect(() => {
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasPermission(status === 'granted');
            }
        )();
    }, []);

    return (
        <View  style={styles.container}>
            <Header title='Scanner' />
            <View style={styles.center}>
                <Text style={styles.content}>Marca: {osName}</Text>
                {hasPermission === null ? <Text>Solicitando permissão de câmera...</Text> : hasPermission === false ? <Text>Permissão de câmera negada</Text> : null}
                <BarCodeScanner
                    style={StyleSheet.absoluteFillObject}
                    ratio='16:9'
                    onBarCodeScanned={handleBarCodeScanned}
                />
                {scannedData && (
                    <View style={styles.dataContainerScanner}>
                        <Text style={styles.dataTextScanner}>Dados escaneados: {scannedData}</Text>
                        <Button title='Limpar' onPress={() => setScannedData(null)} />
                    </View>
                )}
            </View>
            <Footer text='Sair' />
        </View>
    );
};

export default BarCodeScannerScreen;