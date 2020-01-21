import React,  {Component} from 'react';
import {Text,Image,View,StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

class PartyComponent extends Component{
    
    onPress = () =>{
        console.log("Clicked");
    }

    render(){

        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.container}>
                    <View style={styles.partyDetailsSection}>
                        <View style={styles.dateSection}>
                            <Text style={styles.dateDay}>20</Text>
                            <Text style={styles.dateMonth}>MAR</Text>    
                        </View>

                        <View style={styles.titleAddressSection}>
                            <Text style={styles.evntTitle}>Umoja African Festival 2020 </Text>
                            <Text style={styles.eventAddress}>Address of Event</Text>
                        </View>

                        <View>
                            <Text style={styles.eventTime}>6:10PM</Text>
                        </View>
                        
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 10,
        height: 100,
        marginBottom: 10,
    },
    
    partyDetailsSection : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    dateSection: {
        width: '10%',
        borderRightWidth: 1,
        marginRight: 5,
        paddingRight: 5,
    },

    titleAddressSection:{
        width: '80%',
        flexShrink: 1,
        borderRightWidth: 1,
        marginRight: 5,
        paddingRight: 5,
    },
    dateDay:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    dateMonth: {
        fontSize: 10,
    },  
    evntTitle: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    eventAddress:{
        fontSize: 12
    },
    eventTime:{
        fontSize: 12,
        fontWeight: 'bold',
    },
    
});

export default PartyComponent;
