import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Icon} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.selected = this.selected.bind(this);
        this.state = {
            settingsOpen: false,
            profileOpen: false,
            mapOpen: false
        };
    }

     selected (button){
        if (button == 'profile'){
            this.setState(
                {profileOpen: !this.state.profileOpen,
                settingsOpen: false,
                mapOpen: false
    
                })
        }

        else if (button == 'settings'){
            this.setState({ 
                settingsOpen: !this.state.settingsOpen,
                mapOpen: false,
                profileOpen: false
            })
        }

        else if (button == 'map'){
            this.setState({ 
                mapOpen: !this.state.mapOpen,
                settingsOpen: false,
                profileOpen: false,
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <TouchableOpacity 
                    onPress={() => {
                    this.selected('profile');
                    this.props.navigation.navigate('Profile')
                    }} style={[styles.item, { backgroundColor: this.state.profileOpen ? '#e6fcff' : 'white'}]}>
                        <Icon iconStyle={styles.icon} name = "user" type = "antdesign" size = {31}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <TouchableOpacity onPress={() => {
                        this.selected('map');
                        this.props.navigation.navigate('Main')
                    }
                        } style={[styles.item, styles.middle, { backgroundColor: this.state.mapOpen ? '#e6fcff' : 'white' }]}>
                        <Icon iconStyle={styles.icon} name="map-pin" type="feather" size={33} />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <TouchableOpacity onPress={() => {
                        this.selected('settings');
                        this.props.navigation.navigate('Settings')
                        }} style={[styles.item, { backgroundColor: this.state.settingsOpen ? '#e6fcff' : 'white' }]}>
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
        width: '100%',
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: '#5faeba',
        borderTopWidth: StyleSheet.hairlineWidth,
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
        bottom: 5,
        color: '#5faeba'
    },
    middle: {
        borderRightColor: '#5faeba',
        borderLeftColor: '#5faeba',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
    }
});


export default Navbar;