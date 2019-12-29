import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Header = ({navigation}) => {
    const [bookmark, setBookmark] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Icon name={'ios-arrow-back'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setBookmark(!bookmark)}
                style={styles.button}>
                <Icon
                    name={'md-bookmark'}
                    size={30}
                    color={bookmark ? 'green' : 'white'}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
