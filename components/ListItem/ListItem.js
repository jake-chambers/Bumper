import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements'
import React from 'react';

const ListItem = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.labels}>{props.leaveFrom}</Text>
            <Icon color= '#5faeba'name="long-arrow-right" type="font-awesome" size={33} />
            <Text style={styles.labels}>{props.arriveAt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke',
        margin: 3,
        height: responsiveFontSize(13),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    labels: {
        fontSize: responsiveFontSize(3),
        color: '#5c5c5c'
    }
})

export default ListItem;