import { Pressable, Text, View } from 'react-native';

import styles from '../styles/styles';

const Items = ({ item }) => {
    return (
        <Pressable>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.name}
                </Text>

                {item?.emails?.length > 0 ?
                    <Text style={styles.text}>
                        {item.emails[0].email}
                    </Text>
                    :
                    <></>
                }

                {item?.phoneNumbers?.length > 0 ?
                    <Text style={styles.text}>
                        {item.phoneNumbers[0].number}
                    </Text>
                    :
                    <></>
                }
            </View>
        </Pressable>
    )
};

export default Items;