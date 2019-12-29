import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import {Popup} from './popup';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            visible: false,
            animated: new Animated.Value(0),
        };

        this.setSelected = this.setSelected.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    setSelected(i) {
        const {maxSelectedItems} = this.props;
        const {selected} = this.state;
        let newSelected = [...selected];
        if (this.isSelected(i)) {
            if (this.props.multiple) {
                newSelected = selected.filter(x => x !== i);
            } else {
                newSelected = selected;
            }
        } else {
            if (this.props.multiple) {
                if (
                    maxSelectedItems &&
                    maxSelectedItems <= newSelected.length
                ) {
                } else {
                    newSelected.push(i);
                }
            } else {
                newSelected = [i];
            }
        }

        if (this.props.multiple) {
            this.setState(
                {
                    selected: newSelected,
                },
                () => {
                    if (this.props.onValueChange) {
                        this.props.onValueChange(this.getValue());
                    }
                },
            );
        } else {
            this.setState(
                {
                    visible: false,
                    selected: newSelected,
                },
                () => {
                    if (this.props.onValueChange) {
                        this.props.onValueChange(this.getValue());
                    }
                },
            );
        }
    }

    isSelected(i) {
        return this.state.selected.includes(i);
    }

    getValue(str = false) {
        const {options, multiple, labelMax} = this.props;
        const {selected} = this.state;

        const data = selected.map(i => {
            return str ? options[i].label : options[i];
        });

        if (multiple && data.length > labelMax && labelMax) {
            return str ? data[0] + ' and ' + (data.length - 1) + ' more' : data;
        }

        return str ? data.join(', ') : data;
    }

    renderItem({
        isSelected,
        maxSelectedItems,
        selected,
        option,
        index,
        setSelected,
    }) {
        if (this.props.renderItem) {
            return this.props.renderItem({
                isSelected,
                maxSelectedItems,
                selected,
                option,
                index,
                setSelected,
            });
        }

        return (
            <TouchableOpacity
                onPress={() => setSelected(index)}
                disabled={
                    maxSelectedItems &&
                    maxSelectedItems <= selected.length &&
                    !isSelected
                }
                style={{
                    padding: 10,
                    paddingHorizontal: 10,
                    // backgroundColor: 'green',
                    borderBottomWidth: 0.3,
                    borderColor: 'rgba(212,212,212,0.56)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    // borderRadius: 3,
                }}>
                <Text
                    style={{
                        flex: 1,
                        color:
                            maxSelectedItems &&
                            maxSelectedItems <= selected.length &&
                            !isSelected
                                ? 'rgba(0,0,0,0.15)'
                                : 'black',
                    }}>
                    {option.label}
                </Text>
                {isSelected ? (
                    <Icon name={'md-checkmark'} color={'#5AA4E8'} size={15} />
                ) : null}
            </TouchableOpacity>
        );
    }

    toggle() {
        this.setState(
            {
                visible: !this.state.visible,
            },
            () => {
                Animated.timing(this.state.animated, {
                    toValue: this.state.visible ? 1 : 0,
                    duration: 200,
                }).start();
            },
        );
    }

    renderSelected() {
        const {label} = this.props;
        const {selected} = this.state;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <Text
                    style={{
                        // flex: 1,
                        // fontFamily: 'Cairo-SemiBold',
                        // textAlign: 'left',
                        color: selected.length ? '#000' : '#D4D4D4',
                    }}
                    numberOfLines={1}>
                    {selected.length ? this.getValue(true) : label}
                </Text>
                <Icon name={'ios-arrow-down'} size={16} />
            </View>
        );
    }

    render() {
        const {selected, animated} = this.state;
        const {
            containerStyle,
            flex,
            options,
            // label,
            // required,
            maxHeight,
            maxSelectedItems,
            // modal,
        } = this.props;

        const height = animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, maxHeight || 135],
        });

        return (
            <View style={[styles.container, containerStyle, flex && {flex}]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.toggle()}>
                    {this.renderSelected()}
                </TouchableOpacity>

                <Modal transparent visible={this.state.visible}>
                    <Popup
                        options={options}
                        onReturnClick={() => {
                            this.toggle();
                        }}
                        selected={selected}
                        maxSelectedItems={maxSelectedItems}
                        isSelected={this.isSelected}
                        setSelected={this.setSelected}
                        renderItem={this.renderItem}
                    />
                </Modal>
            </View>
        );
    }
}

export default Select;
