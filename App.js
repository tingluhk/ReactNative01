
import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput, Button} from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
export default class App extends Component<Props> {

  state = {
    placeName: "",
    places: ["test"]
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName : val
    });
  };

  placeSubmitHandler = () =>{

    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(p => {
      console.log("placeSubmitHandler111");
      console.log(p);
      return{
        places: p.places.concat(p.placeName)
      };
    });
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder = "An Awesome place"
            style={styles.placeInput}
            onChangeText={ this.placeNameChangedHandler }
            value = {this.state.placeName}
          />
          <Button
            style = {styles.placeInput}
            title = "Add"
            onPress = {this.placeSubmitHandler}
            />
        </View>
        <PlaceList places= {this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput:{
    width:"70%"
  },
  placeButton:{
    width:"30%"
  },
  listContainer:{
    width:"100%",

  }
});
