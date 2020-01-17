import React, {Component} from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';



class NewPartyscreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Add New Party</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NewPartyscreen;