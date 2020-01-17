import React, {Component} from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';


class Searchscreen extends Component{

    state = {
        search: '',
    };
    
    updateSearch = search => {
        this.setState({ search });
    };

    render(){

        const { search } = this.state;

        return (
        
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    round
                    onChangeText={this.updateSearch}
                    placeholder="Search events..."
                    value = {search}
                />
            </View>
    
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },

});

export default Searchscreen;