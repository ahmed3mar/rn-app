import React, {Component} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';

import styles from './style';
import {chunkPrice, priceFormat} from '../../utils/price';
import {getData} from '../../services/apartments';

class HomeScreen extends Component {
    state = {
        bedrooms: [],
        bathrooms: [],
        filter: {
            prices: [],
            bedrooms: [],
            bathrooms: [],
        },
        data: [],
        loading: true,
    };

    constructor() {
        super();

        this.setBedrooms = this.setBedrooms.bind(this);
        this.setBathrooms = this.setBathrooms.bind(this);
    }

    range = (start, end) =>
        Array.from({length: end - start}, (v, k) => k + start);

    componentDidMount(): void {
        getData().then(res => {
            const data = res.data;
            const maxPrice = Math.max.apply(
                Math,
                data.map(function(o) {
                    return o.price;
                }),
            );
            const maxBedrooms = Math.max.apply(
                Math,
                data.map(function(o) {
                    return o.bedrooms;
                }),
            );
            const maxBathrooms = Math.max.apply(
                Math,
                data.map(function(o) {
                    return o.bathrooms;
                }),
            );

            this.setState({
                loading: false,
                data,
                filter: {
                    prices: chunkPrice(maxPrice).map(item => ({
                        label: `$${priceFormat(item[0])} - $${priceFormat(
                            item[1],
                        )}`,
                        value: item,
                    })),
                    bedrooms: this.range(1, maxBedrooms + 1).map(item => ({
                        label: `${item}br`,
                        value: item,
                    })),
                    bathrooms: this.range(1, maxBathrooms + 1).map(item => ({
                        label: `${item}bh`,
                        value: item,
                    })),
                },
            });
        });
    }

    onPress = apartment => {
        const {navigation} = this.props;
        navigation.push('Details', {apartment});
    };

    filteredData = () => {
        const {bedrooms, bathrooms} = this.state;

        const bedroomsArr = bedrooms.map(bedroom => bedroom.value);
        const bathroomsArr = bathrooms.map(bathroom => bathroom.value);

        return this.state.data.filter(apartment => {
            let isOk = true;
            if (
                bedroomsArr.length &&
                !bedroomsArr.includes(apartment.bedrooms)
            ) {
                isOk = false;
            }
            if (
                bathroomsArr.length &&
                !bathroomsArr.includes(apartment.bathrooms)
            ) {
                isOk = false;
            }
            return isOk;
        });
    };

    setBedrooms(bedrooms) {
        this.setState({
            bedrooms,
        });
    }

    setBathrooms(bathrooms) {
        this.setState({
            bathrooms,
        });
    }

    renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Input />

                <View style={styles.filterContainer}>
                    <Select
                        multiple
                        label={'Select price'}
                        options={this.state.filter.prices}
                        flex={3}
                    />
                    <Select
                        label={'Select BR'}
                        multiple
                        onValueChange={this.setBedrooms}
                        value={'1br'}
                        options={this.state.filter.bedrooms}
                        flex={2}
                    />
                    <Select
                        multiple
                        label={'Select BH'}
                        value={'1bh'}
                        onValueChange={this.setBathrooms}
                        options={this.state.filter.bedrooms}
                        flex={2}
                    />
                </View>
            </View>
        );
    };

    renderList() {
        return (
            <View style={styles.listContainer}>
                <FlatList
                    stickyHeaderIndices={[0]}
                    ListHeaderComponent={this.renderHeader()}
                    data={this.filteredData()}
                    renderItem={({item: apartment, index}) => {
                        return (
                            <Card
                                key={apartment.id}
                                apartment={apartment}
                                onPress={() => this.onPress(apartment)}
                            />
                        );
                    }}
                />
            </View>
        );
    }

    renderLoading() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }

    render() {
        const {loading} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {loading ? this.renderLoading() : this.renderList()}
            </SafeAreaView>
        );
    }
}

export default HomeScreen;
