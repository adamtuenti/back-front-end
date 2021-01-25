import React, { Component } from 'react';
import {ImageBackground,StyleSheet,TouchableHighlight,Text,View,Dimensions,Image} from 'react-native';
import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
const image = { uri: 'https://github.com/adamtuenti/Proyecto-Integrador/blob/main/imagenes/fondo.jpg?raw=true' };


export default class Home extends Component {

    render(){
        return(
            <View style={styles.container}>
              <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Animal Guess</Text> 
                <TouchableHighlight style={{backgroundColor:'white',height:105,borderRadius:75,marginBottom:'85%'}}>
                <MaterialCommunityIcons name="home-circle" size={105} color="#F46036" onPress = {()=>this.props.navigation.navigate('Main')}/>
                </TouchableHighlight>
              </ImageBackground>
            </View>
        )
    
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: 'white',
    opacity: 0.8

  },
  image: {
    flex: 1,
    height:'100%',
    width:'100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center'
  },
  text: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom:'3.5%'
  },
});