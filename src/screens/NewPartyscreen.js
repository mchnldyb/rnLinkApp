import React, {Component} from 'react';
import { Text, ScrollView, DatePickerIOS, TextInput, Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



class NewPartyscreen extends Component{

    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
               
                <View style={{backgroundColor: '#fff'}}>
                    <Input
                        placeholder='Title goes here'
                        label="Title of Event"
                        containerStyle={styles.inputContainerPad}
                    />

                    <Input
                        placeholder='Description goes here'
                        label="Event Description"
                        multiline
                        containerStyle={styles.inputContainerPad}
                    />
                </View>

                <View style={{backgroundColor: '#fff', marginTop: 25}}>
                    <Input 
                        placeholder="Select event Date"
                        containerStyle={styles.inputContainerPad}
                        label="Date & Time"  />


                    <Input 
                        placeholder="Street, City, Zip"
                        containerStyle={styles.inputContainerPad}
                        label="Location"  />
                </View>

                <View style={{backgroundColor: '#fff', marginTop: 25, flex: 1, flexDirection: 'row', }}>
                <CheckBox
                    title='BYOB'
                    checked
                />
                <CheckBox
                    title='House Party'
                    checked
                />
                <CheckBox
                    title='BYOW'
                    checked
                />
                </View>
                <Button style={{marginTop: 15}} title="Create Event"/>
               </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        
    },
    textAreaStyle:{
        
    },  
    inputContainerPad: {
        padding: 15
    },  
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
});

export default NewPartyscreen;