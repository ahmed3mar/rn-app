import React from 'react';
import {View, Text, Image} from 'react-native';

import Description from './components/Description';
import Amenities from './components/Amenities';
import Rooms from './components/Rooms';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import SmallCard from '../../components/SmallCard';
import styles from './style';
import {priceFormat} from '../../utils/price';

const DetailsScreen = ({navigation}) => {
    const apartment = navigation.getParam('apartment');

    return (
        <View>
            <Header navigation={navigation} />
            <Image style={styles.image} source={{uri: apartment.image}} />

            <SmallCard
                title={apartment.city}
                price={priceFormat(apartment.price)}>
                <View>
                    <Text style={styles.address}>{apartment.address}</Text>

                    <Tabs tabs={['Description', 'Amenities', 'Rooms']}>
                        <Description description={apartment.description} />
                        <Amenities />
                        <Rooms />
                    </Tabs>
                </View>
            </SmallCard>
        </View>
    );
};

export default DetailsScreen;
