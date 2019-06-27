import React from 'react';
import { StyleSheet,Text, View , ScrollView} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import  ListItem  from '../ListItem/ListItem'
export default class Main extends React.Component {
    render(){
        return (
            <View style = {{flex: 1}}>
                <Text style={styles.header}>Routes</Text>
                <ScrollView style = {styles.scroll}>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                </ScrollView>
            </View>
        );
    }
}

const list = [
    {
        leaveFrom: 'Home',
        arriveAt: 'Burlington GO'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#5faeba',
        fontSize: responsiveFontSize(3),
        padding: '3%',
        color: '#e6fcff',
        shadowOffset: { width: 0.1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 1,
        zIndex: 1,  
    },
    scroll: {
        flex: 1,
        height: 'auto'
    }

});
