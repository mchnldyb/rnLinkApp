import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';



const Searchscreen =  () => {
    return (
        
        <View style={styles.container}>
            <SearchBar
                lightTheme
                round
                placeholder="Search events..."
                value = ""
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        backgroundColor: '#000',
    },

});

export default Searchscreen;