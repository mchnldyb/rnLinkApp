import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const PartyListscreen =  () => {
    return (
        <View style={styles.container}>
            <Text>Party Listing Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PartyListscreen;