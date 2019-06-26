import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const AppNavigator = createStackNavigator( 
    {
        Main: Main,
        Settings: Settings,
        Profile: Profile
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
);

const Container = createAppContainer(AppNavigator);

export default Container;