import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home: {
        screen: HomeScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
};

const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
