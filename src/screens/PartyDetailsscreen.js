import React, {Component} from 'react';
import { Text, Image, StyleSheet, View, ScrollView,Dimensions,TouchableOpacity, Platform } from 'react-native';
import MapView from 'react-native-maps';

class PartyDetailsscreen extends Component{
    
    render(){

        const _event = this.props.navigation.state.params;
        //console.log();

        return(
            <View style={styles.container}>
                <MapView onPress={e => this.props.navigation.navigate('ViewMap')} style={styles.mapStyle} showsUserLocation></MapView>
                <ScrollView>
                    <View style={styles.section}><Text>Social Icons</Text></View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Title</Text>
                        <Text style={styles.sectionContent}>{_event.name}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Description/Rules</Text>
                        <Text style={styles.sectionDescription}>{_event.description}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Location</Text>
                        <Text>{_event.street}, {_event.city}, {_event.state}, {_event.zip}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Date/Time</Text>
                        <Text>{_event.datetime}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        marginBottom: 15,
        height: '35%',
        borderWidth: 1,
        borderColor: '#DCDCDC',
    },
    section:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
    },
    sectionTitle:{
        fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'normal',
        fontSize: 15,
        color: '#A9A9A9',
    },
    sectionContent: {
        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'normal',
        fontSize: 25,
        fontWeight: 'bold',
    },
    sectionDescription: {
        fontSize: 17,
    }
});

export default PartyDetailsscreen;