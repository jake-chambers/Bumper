import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';

const AppNavigator = createBottomTabNavigator( 
    {
        Main: Main,
        Settings: Settings,
        Profile: Profile,
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
        tabBarComponent: Navbar,
    }
);

const Container = createAppContainer(AppNavigator);

export default Container;