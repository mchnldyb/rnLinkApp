import React, {Component} from 'react';
import { Text, ScrollView, Picker, DatePickerIOS, TextInput, Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/FontAwesome';

const eventCategories = [{
    id: 1,
    name: 'BYOB'
  }, {
    id: 2,
    name: 'House Party'
  }, {
    id: 3,
    name: 'Paid Event'
  }, {
    id: 4,
    name: 'BYOW'
  }, {
    id: 5,
    name: 'Kick Back'
  }
];


class NewPartyscreen extends Component{

    state = {
        selectedItems : [],
      };
    
      
      onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };

    render(){
        const { selectedItems } = this.state;
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

                <View style={{backgroundColor: '#fff', marginTop: 25 }}>
                    <MultiSelect
                        hideTags
                        items={eventCategories}
                        uniqueKey="id"
                        ref={(component) => { this.multiSelect = component }}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="Select Categories"
                        searchInputPlaceholderText="Search Items..."
                        onChangeInput={ (text)=> console.log(text)}
                        itemTextColor="#000"
                        displayKey="name"
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor="#48BBEC"
                        submitButtonText="Add Categories"
                        
                    />
                    <View>
                    {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
                    </View>
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