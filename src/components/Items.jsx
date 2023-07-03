import { Pressable, Text, View } from 'react-native';

import styles from '../styles/styles';

const Items = ({ item }) => {
    return (
        <Pressable style={{width: '100%'}}>
            <View style={[styles.list]}>
                <Text style={styles.titleList}>
                    {item.name}
                </Text>

                {item?.emails?.length > 0 ?
                    <Text style={[styles.textList, styles.listKop]}>
                        Email: {item.emails[0].email}
                    </Text>
                    :
                    <Text style={styles.textList}>
                        Email: N/A
                    </Text>
                }

                {item?.phoneNumbers?.length > 0 ?
                    <Text style={styles.textList}>
                        N°: {item.phoneNumbers[0].number}
                    </Text>
                    :
                    <Text style={styles.textList}>
                        N°: N/A
                    </Text>
                }
            </View>
        </Pressable>
    )
};

export default Items;