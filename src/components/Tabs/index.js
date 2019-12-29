import React, {useState} from 'react';
import {View} from 'react-native';
import TabBar from '../TabBar';
import styles from './style';

const Tabs = ({children, tabs}) => {
    const [active, setActive] = useState(0);

    const renderTabBars = () => {
        return (
            <View style={styles.tabBarContainer}>
                {tabs.map((tab, i) => (
                    <TabBar
                        onClick={() => setActive(i)}
                        active={active === i}
                        tab={tab}
                        key={tab}
                    />
                ))}
            </View>
        );
    };

    return (
        <View>
            {React.Children.map(children, (child, i) =>
                i === active ? child : null,
            )}
            {renderTabBars()}
        </View>
    );
};

export default Tabs;
