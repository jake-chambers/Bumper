import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header.js'
import Content from '../Content/Content.js'
export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Header></Header>
                <Content></Content>
                <Navbar></Navbar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },
});
