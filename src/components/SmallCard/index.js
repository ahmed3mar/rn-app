import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const SmallCard = ({children, title, price}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.contentContainer}>{children}</View>
        </View>
    );
};

export default SmallCard;
