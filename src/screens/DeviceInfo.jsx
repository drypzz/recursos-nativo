import * as Device from 'expo-device';
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DeviceInfo(){
    return (
        <View style={styles.container}>
            <Header title='Informações do Dispositivo' />
            <View>
                <Text style={styles.content}>Marca: {Device.brand}</Text>

                <Text style={styles.content}>Nome: {Device.osName}</Text>

                <Text style={styles.content}>Versão: {Device.osVersion}</Text>

                <Text style={styles.content}>Designer: {Device.designName}</Text>

                <Text style={styles.content}>Ano: {Device.deviceYearClass}</Text>

                <Text style={styles.content}>Memória: {Device.totalMemory}</Text>

                <Text style={styles.content}>Modelo: {Device.modelName}</Text>

                <Text style={styles.content}>Fabricante: {Device.manufacturer}</Text>
                
                <Text style={styles.content}>Arquitetura: {Device.supportedCpuArchitectures}</Text>
            </View>
            <Footer text='Sair' />
        </View>
    )
}

export default DeviceInfo;