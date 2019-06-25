import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './components/Main/Main';
import Test from './components/Test/Test';

const AppNavigator = createStackNavigator({
    Main: { 
        screen: Main, 
    },
    Test: {
        screen: Test,
    }
});

const Container = createAppContainer(AppNavigator);

export default Container;