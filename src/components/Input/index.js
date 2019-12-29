import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';

const Input = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput value={'Brooklyn, NY'} style={styles.input} />
        </View>
    );
};

export default Input;
