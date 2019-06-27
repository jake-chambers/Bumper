import React from 'react';
import { StyleSheet,Text, View , ScrollView} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import  ListItem  from '../ListItem/ListItem'
import SubHeader from '../Header/SubHeader'
export default class Main extends React.Component {
    render(){
        return (
            <View style = {{flex: 1}}>
            <SubHeader heading = "Routes"></SubHeader>
                <ScrollView style = {styles.scroll}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leaveFrom={l.leaveFrom}
                                arriveAt={l.arriveAt}
                            />
                        ))
                    }
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
        leaveFrom: 'Work',
        arriveAt: 'Girlfriends House'
    }, 
    {
        leaveFrom: 'Grandmas',
        arriveAt: 'Moms House'
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        height: 'auto'
    }

});
