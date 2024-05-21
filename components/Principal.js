import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView,  SafeAreaView, StatusBar,TextInput,TouchableHighlight, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import {Accelerometer} from 'expo-sensors';

class Principal extends React.Component{
  render(){
    return(
    <View>
    <Text style={styles.texto}>Welcome To {'\n'} ORGANIZION</Text>
       <TouchableOpacity style={styles.button}onPress={() => this.goToDetails()}>
  <Text>{"About Organizion"}</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonIntel}onPress={() => this.goToIntel()}>
  <Text>{"INTEL"}</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonAMD}onPress={() => this.goToAMD()}>
  <Text>{"AMD"}</Text>
</TouchableOpacity>
    </View>
    )
  }
  goToDetails(){
    this.props.navigation.navigate("Detalhes");
  }
  goToIntel(){
    this.props.navigation.navigate("Intel");
  }
  goToAMD(){
    this.props.navigation.navigate("AMD");
  }
}

const styles = StyleSheet.create({

  texto: {
    justifyContent: 'center',
    backgroundColor: 'rgba(115, 155, 355, 0.8)',
    textAlign : 'center',
    fontWeight: "bold",
    bottom: -20,
    borderRadius: 20,
    fontSize: 30,
    borderWidth:2,
  },
    button: {
    alignItems:'center',
    backgroundColor: 'lightgray',
    bottom: -370,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#20232a',
    height: 50,
    justifyContent:'center'
  }, 


  buttonIntel: {
    alignItems:'center',
    backgroundColor:'lightblue',
    bottom: -80,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#20232a',
    height: 50,
    justifyContent:'center'
   
  },

   buttonAMD: {
    alignItems:'center',
    backgroundColor:'#ff6961',
    bottom: -150,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#20232a',
    height: 50,
    justifyContent:'center'
  },


});

export default Principal;