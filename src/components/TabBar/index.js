import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const TabBar = ({tab, active, onClick}) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={[styles.tabBar, active && styles.tabActive]}>
            <Text style={styles.label}>{tab}</Text>
        </TouchableOpacity>
    );
};

export default TabBar;
