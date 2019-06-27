import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements'
import React from 'react';

const SubHeader = (props) => {
    return (
        <Text style={styles.header}>{props.heading}</Text>
    )
}

const styles = StyleSheet.create({
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
})

export default SubHeader;