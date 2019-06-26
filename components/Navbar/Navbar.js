import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {Icon} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settingsOpen: false,
            profileOpen: false,
            routesOpen: false
        };
    }

    selectNavItem(){

    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <TouchableOpacity style={styles.item}>
                        <Icon iconStyle={styles.icon} name = "user" type = "antdesign" size = {31}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <TouchableOpacity style={[styles.item,styles.middle]} class = 'middle'>
                        <Icon iconStyle={styles.icon} name="map-pin" type="feather" size={33} />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <TouchableOpacity style={styles.item}>
                        <Icon iconStyle = {styles.icon} name="settings" type="feather" size={33} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    view: {
        backgroundColor:'gray',
        width: '33.333333%',
        display: 'flex',
        justifyContent: 'center'
    },
    item: {
        backgroundColor: 'white',
        display: 'flex',
        flexBasis: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon:{
        position: 'relative', 
        bottom: 5
    },
    middle: {
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
        borderLeftWidth: 1,
        borderRightWidth: 1,
    }
});
