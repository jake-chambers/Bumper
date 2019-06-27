import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';


const AppNavigator = createStackNavigator( 
    {
        Main: Main,
        Settings: Settings,
        Profile: Profile,
        Navbar: Navbar,
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
);

const Container = createAppContainer(AppNavigator);

export default Container;