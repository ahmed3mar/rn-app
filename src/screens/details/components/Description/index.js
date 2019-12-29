import {Text, View} from 'react-native';
import React from 'react';
import styles from './style';

const Description = ({description}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{description}</Text>
        </View>
    );
};

export default Description;
