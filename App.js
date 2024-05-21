import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView,  SafeAreaView, StatusBar,TextInput,TouchableHighlight,Vibration , } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import {Accelerometer} from 'expo-sensors';
import Principal from './components/Principal';
import Detalhes from './components/Detalhes';
import Intel from './components/Intel';
import AMD from './components/AMD';
import firebase from './config/config'

const Drawer = createDrawerNavigator();





class Relatos extends React.Component{
  constructor(props){
    super(props);
    this.cpuFPS = ""
    this.gpuFPS = ""
    this.game = ""
    this.fps = 0
    this.quantidadeRam = 0
  }

  salvar(){
      firebase.database().ref('/fps').push({
        cpuFPS: this.cpuFPS,
        gpuFPS: this.gpuFPS,
        game: this.game,
        fps: this.fps,
        quantidadeRam: this.quantidadeRam
      })
      alert("Dados salvos")
  }

  render(){
    return(
      <ScrollView style= {{flex:1}}>
      <View> 

      <Text style={styles.texto}> Compartilhe seus FPS in game</Text>
      <Text>{'\n\n\n\n'}</Text>
        <TextInput style={styles.input} 
          placeholder="Insira o nome da sua CPU e sua série"
          onChangeText={(texto)=>{this.cpuFPS = texto}}
        />
        <TextInput style={styles.input} 
          placeholder="Insira o nome da sua GPU"
          onChangeText={(texto)=>{this.gpuFPS = texto}}
        />
        <TextInput style={styles.input} 
          placeholder="Insira o nome do jogo para registrar os FPS"
          onChangeText={(texto)=>{this.game = texto}}
        />
        <TextInput style={styles.input} 
          placeholder="Digite o tamanho da sua RAM"
          onChangeText={(texto)=>{this.quantidadeRam = texto}}
        />
        <TextInput style={styles.input} 
          placeholder="Média de FPS"
          onChangeText={(texto)=>{this.fps = texto}}
        />
        <TouchableHighlight style={styles.buttonDetalhes} onPress={()=>this.salvar()}>
          <Text  style={styles.txtBotao} >{"Adicionar"}</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    )
  }
}

class Buscar extends React.Component{
  constructor(props){
    super(props);
    this.gpuFPS = ""
    this.game = ""
    this.quantidadeRam = 0
    this.cpu = ""
    this.state = {
      fps: []
    }
  }
  
  buscar(){
    firebase.database().ref("fps").orderByChild("gpuFPS").equalTo(this.gpuFPS).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        alert("Não encontrado!")
      }
      else{
          let dados = Object.values(data)
          this.setState({fps: dados})
      }
    })
  }
  
  render(){
    return(
      <ScrollView>
      <View> 
        <TextInput style={styles.input} 
          placeholder="GPU"
          onChangeText={(texto)=>{this.gpuFPS = texto}}
        />
        <TouchableHighlight style={styles.buttonDetalhes} onPress={()=>this.buscar()}>
          <Text style={styles.txtBotao} >{"Busca"}</Text>
        </TouchableHighlight>
        {this.state.fps.length > 0 ? 
          this.state.fps.map( objeto => (
            <Text style={styles.resultado}>{'\n\n\n'} ----> Média de FPS: {objeto.fps}{'\n'} ----> GAME: {objeto.game}{'\n'} ----> RAM: {objeto.quantidadeRam}{'\n'} </Text>)) : 
            null}
      </View>
      </ScrollView>
    )
    
  }
}

const styles = StyleSheet.create({
  resultado: {
    justifyContent:'center',
    alignItems:'center',
    padding: 1
  },

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

    buttonDetalhes: {
    alignItems:'center',
    backgroundColor: 'lightgray',
    //bottom: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#20232a',
    height: 50,
    justifyContent:'center'
  }, 
  input: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center'
  },

});

class App extends React.Component {

  render() {
    return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Organizion" component={Principal} />
        <Drawer.Screen name="Detalhes" component={Detalhes} />
        <Drawer.Screen name="Relatos FPS" component={Relatos} />
        <Drawer.Screen name="Buscar FPS" component={Buscar} />
        <Drawer.Screen name="Intel" component={Intel} />
        <Drawer.Screen name="AMD" component={AMD} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;