import React, {Component} from 'react';
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import PartyComponent from '../components/PartyComponent';


export default class PartyListscreen extends Component {
    state = {
      index: 0
    }
    
    updateIndex = (index) => {
      this.setState({index})
    }
    
    render() {
      return (
        <View style={styles.container}>
        <ButtonGroup
          selectedBackgroundColor="pink"
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Explore', 'Popular', 'Favourites']}
          conta
          inerStyle={{height: 30}} />
        
        <ScrollView>

        <PartyComponent></PartyComponent>
        <PartyComponent></PartyComponent>
        <PartyComponent></PartyComponent>
        <PartyComponent></PartyComponent>
        <PartyComponent></PartyComponent>
        <PartyComponent></PartyComponent>
        <PartyComponent></PartyComponent>

        </ScrollView>

        
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      
    },

    ptyComponent: {
        paddingBottom: 50
    }
});

//export default PartyListscreen;