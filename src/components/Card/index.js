import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {boxShadow} from '../../styles/mixins';
import SmallCard from '../SmallCard';
import styles from './style';
import {priceFormat} from '../../utils/price';

const Card = ({onPress, apartment}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: apartment.image,
                    }}
                />
            </View>
            <SmallCard
                title={apartment.city}
                price={priceFormat(apartment.price)}>
                <View>
                    <Text style={styles.address}>{apartment.address}</Text>
                    <View style={styles.amenitiesContainer}>
                        <Text style={styles.amenities}>
                            {apartment.bedrooms}bed {apartment.bathrooms}bath
                        </Text>
                        <Icon name="md-heart-empty" size={20} />
                    </View>
                </View>
            </SmallCard>
        </TouchableOpacity>
    );
};

export default Card;
