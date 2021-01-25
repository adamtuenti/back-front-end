import React, { Component } from 'react';
import { Image } from 'react-native';
import {StyleSheet,TouchableHighlight,Text,View,Dimensions} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import { Header } from "react-native-elements";

export default class Analizar extends Component {



    render(){
        return(
            <View style={{flex:1,  alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "white", width:'100%',height:'91%' }}>
                    <View >
                        <Text style={{fontWeight: 'bold', color: 'black', fontSize:28}}>Imagen Seleccionada</Text>
                    </View>
                    <View>
                        <Image source={{uri: fotoEvidencia}} style= {{height: 275,width: 250, marginTop: "10.5%",borderWidth:2,borderColor:'black'}}/>
                    </View>
                    <View>
                        <TouchableHighlight style={{alignItems: 'center',backgroundColor: '#F46036',padding: 15.2,width:155,borderRadius: 4,borderWidth: 1,borderColor: 'black',marginTop:'7.5%'}} onPress = {()=>this.props.navigation.navigate('Resultado')}>
                                <Text style={{fontWeight: 'bold', color: 'white', fontSize:21}}>Confirmar</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{height:63.5, flexDirection: 'row',width:'100%',justifyContent:'center',backgroundColor:'#1B7FCF',borderWidth:1}}>
                        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')} style={{marginLeft:'1.5%',marginRight:'1.5%',alignItems:'center',justifyContent:'center'}}>
                            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'5.2%'}}>
                                <MaterialCommunityIcons name="home-circle" color='#F9E9EC' size={65.5} />
                            </View>
                        </TouchableHighlight>
                </View>        
            </View>
        )
    }
}

const styles = StyleSheet.create({
 activeImageContainer: {
  flex: 1,
  width: Dimensions.get("window").width,
  height: "15%",
  backgroundColor: "#eee",
  borderBottomWidth: 0.5,
  borderColor: "#fff"
 },
});