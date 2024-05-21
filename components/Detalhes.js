import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView,  SafeAreaView, StatusBar,TextInput,TouchableHighlight, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import {Accelerometer} from 'expo-sensors';


class Detalhes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>{"Desenvolvida por DevLuiis (RA:24.222.080-4)"}</Text>
        <Card>
          <Card.Title title="ORGANIZION" />
          <Card.Content>
            <Text style={styles.bodyText}>
              A Organizion é uma plataforma para simular a montagem de PCs gamer com processadores Intel e AMD. Ela oferece uma interface intuitiva para selecionar e combinar componentes, garantindo compatibilidade e desempenho ideais. Além de facilitar a montagem virtual de PCs, a Organizion educa os usuários sobre hardware e configurações otimizadas para jogos.
            </Text>
          </Card.Content>
        </Card>
        <TouchableOpacity style={styles.buttonDetalhes} onPress={() => this.props.navigation.goBack()}>
          <Text>{"Go Back"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
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

});

export default Detalhes;