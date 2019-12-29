import React from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const Popup = ({
    options,
    maxSelectedItems,
    onReturnClick,
    selected,
    isSelected,
    setSelected,
    renderItem,
}) => {
    const renderHeader = () => {
        return (
            <View
                style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Text
                    style={{
                        color: '#a3a3a3',
                    }}>
                    Select item
                </Text>
                <TouchableOpacity onPress={onReturnClick}>
                    <Text>DONE</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onReturnClick}
            style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.7)',
                justifyContent: 'center',
                // alignItems: 'center',
            }}>
            <View
                style={{
                    margin: 20,
                    marginVertical: 150,
                    backgroundColor: '#FFF',
                }}>
                {renderHeader()}
                <FlatList
                    data={options}
                    renderItem={({item, index}) => {
                        const cc = isSelected(index);
                        return renderItem({
                            isSelected: cc,
                            selected,
                            option: item,
                            index,
                            maxSelectedItems,
                            setSelected,
                        });
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};
