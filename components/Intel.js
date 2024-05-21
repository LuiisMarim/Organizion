import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView,  SafeAreaView, StatusBar,TextInput,TouchableHighlight,Vibration , } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Card, Paragraph, Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import {Accelerometer} from 'expo-sensors';

class Intel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMotherboard: null,
      motherboards: [
        { label: 'Selecione', value: 0 },
        { label: 'ASUS ROG Strix', value: 1000 },
        { label: 'MSI MPG Z490', value: 1230 },
        { label: 'Gigabyte Z490 AORUS', value: 990 }
      ],
      selectedCpu: null,
      cpu: [
        { label: 'Selecione', value: 0 },
        { label: 'Intel core i3 13100F', value: 650 },
        { label: 'Intel core i5 13100K', value: 950 },
        { label: 'Intel core i7 13100H', value: 1150 }
      ],
      selectedGpu: null,
      gpu: [
        { label: 'Selecione', value: 0 },
        { label: 'Nvidia RTX 4090', value: 13000},
        { label: 'Nvidia RTX 3050', value: 1950 },
        { label: 'Nvidia GTX 1650', value: 550 }
      ], 
      selectedRam: null,
      ram: [
        { label: 'Selecione', value: 0 },
        { label: 'Memória RAM Kingston Fury Beast, RGB, 32GB (2x16GB), 3200MHz, DDR4', value: 599.99 },
        { label: 'Memória RAM Kingston Fury Beast, 8GB, 3200MHz, DDR4', value: 250 },
        { label: 'MEMORIA TEAM GROUP T-FORCE VULCAN PICHAU, 16GB (2X8), DDR4, 3200MHZ', value: 339 }
      ],
       selectedFont: null,
      font: [
        { label: 'Selecione', value: 0 },
        { label: 'FONTE AEROCOOL VX-500 500W', value: 199.99 },
        { label: 'FONTE COUGAR GEX X2 1000, 1000W, FULL MODULAR, 80 PLUS GOLD', value: 1250 },
        { label: 'FONTE MANCER THUNDER 600W',value: 339 }
      ],
      selectedCooler: null,
      cooler: [
        { label: 'Selecione', value: 0 },
        { label: 'Water Cooler Rise Mode Gamer Black, RGB, 240mm', value: 199.99 },
        { label: 'Water Cooler Gamer Rise Mode, 360mm', value: 250 },
        { label: 'Water Cooler Rise Mode RGB, 120mm',value: 139 }
      ],
      x: undefined,
      y: undefined,
      z: undefined,
      
      
    };
      Accelerometer.setUpdateInterval(100);
      Accelerometer.addListener( (data)=> {
      this.setState({x: data.x, y: data.y, z: data.z})
    });
  }

  calculateTotal = () => {
    const { selectedMotherboard, selectedCpu, selectedGpu,selectedRam,selectedFont, selectedCooler,motherboards, cpu, gpu, ram, font, cooler } = this.state;
    const motherboard = motherboards.find(item => item.value === selectedMotherboard);
    const selectedCpuItem = cpu.find(item => item.value === selectedCpu);
    const selectedGpuItem = gpu.find(item => item.value === selectedGpu);
    const selectedRamItem = ram.find(item => item.value === selectedRam);
    const selectedFontItem = font.find(item=>item.value === selectedFont);
    const selectedCoolerItem = cooler.find(item=>item.value === selectedCooler)

    if (motherboard && selectedCpuItem && selectedGpuItem && selectedRamItem && selectedFontItem && selectedCoolerItem) {
      return motherboard.value + selectedCpuItem.value + selectedGpuItem.value + selectedRamItem.value + selectedFontItem.value + selectedCoolerItem.value;
    }
    return null;
  }

  
  calculateX = () => {
    return Math.round(this.state.x*100)/100;
  }

  componentDidUpdate(prevProps, prevState) {
    const eixoX = this.calculateX();
    if (eixoX > 0.70) {
      Vibration.vibrate();
      this.props.navigation.navigate("Organizion");
      
    }
  }


  resetState = () => {
    this.setState({
      selectedMotherboard: null,
      selectedCpu: null,
      selectedGpu: null,
      selectedRam: null,
      selectedFont: null,
      selectedCooler: null,
      
    });
  }



  render() {
    const total = this.calculateTotal();

    return (
      <ScrollView style= {{flex:1}}>
        <View>
        <Text>Monte seu PC Intel{'\n'} {'<---'} Incline para esquerda para retornar ao menu</Text>
        <Text style={styles.label}>Escolha a placa mãe:</Text>
        <Picker
          selectedValue={this.state.selectedMotherboard}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({ selectedMotherboard: itemValue })}
        >
          {this.state.motherboards.map((motherboard, index) => (
            <Picker.Item key={index} label={motherboard.label} value={motherboard.value} />
          ))}
        </Picker>

        <Text style={styles.label}>Escolha o CPU:</Text>
        <Picker
          selectedValue={this.state.selectedCpu}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({ selectedCpu: itemValue })}
        >
          {this.state.cpu.map((cpu, index) => (
            <Picker.Item key={index} label={cpu.label} value={cpu.value} />
          ))}
        </Picker>

        
        <Text style={styles.label}>Escolha a GPU:</Text>
        <Picker
          selectedValue={this.state.selectedGpu}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({ selectedGpu: itemValue })}
        >
          {this.state.gpu.map((gpu, index) => (
            <Picker.Item key={index} label={gpu.label} value={gpu.value} />
          ))}
        </Picker>

         <Text style={styles.label}>Escolha a ram:</Text>
        <Picker
          selectedValue={this.state.selectedRam}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({ selectedRam: itemValue })}
        >
          {this.state.ram.map((ram, index) => (
            <Picker.Item key={index} label={ram.label} value={ram.value} />
          ))}
        </Picker>

        <Text style={styles.label}>Escolha sua fonte:</Text>
        <Picker
          selectedValue={this.state.selectedFont}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({ selectedFont: itemValue })}
        >
          {this.state.font.map((font, index) => (
            <Picker.Item key={index} label={font.label} value={font.value} />
          ))}
        </Picker>
          <Text style={styles.label}>Escolha seu WaterCooler:</Text>
          <Picker
          selectedValue={this.state.selectedCooler}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({ selectedCooler: itemValue })}
        >
          {this.state.cooler.map((cooler, index) => (
            <Picker.Item key={index} label={cooler.label} value={cooler.value} />
          ))}
        </Picker>

        
        

       
      </View>
      <Text style={styles.selectedValue}>
          {total !== null ? `Preço Total do PC GAMER: R$ ${total}` : 'Escolha seus componentes'}
        </Text>
       <TouchableOpacity style={styles.buttonDetalhes} onPress={() => { this.resetState(); this.props.navigation.goBack(); }}>

          <Text>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  

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


  label: {
    fontSize: 18,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20
  },
  selectedValue: {
    fontSize: 16,
    marginTop: 20,
    flex: 1
  }, 


});





export default Intel;