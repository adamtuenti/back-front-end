import React, { Component } from 'react';
import { Image } from 'react-native';
import {StyleSheet,TouchableHighlight,Text,View,Dimensions,ActivityIndicator} from 'react-native';
import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';

import {RNCamera} from 'react-native-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as Expo from 'expo';




export default class Main extends Component {
    

    constructor(props){
        
        
    super(props)
        //aqui se almacenara de manera global el uri de la imagen
        global.fotoEvidencia = '';
        //variable global donde se almacenara el codigo en base 64 de la imagen
        global.imageBase64 = '';
        this.state = {
            hasCameraPermission: null,
            image: null,
            }
    
    }


    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: status === "granted" });

    }

    //acceder a la galeria del celular
    _getPhotoLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4,4],
        base64: true,
        });
        if (!result.cancelled) {
            fotoEvidencia = result.uri;
            imageBase64 = result.base64
            if(fotoEvidencia!=''){
                this.props.navigation.navigate('Analizar')
            }
            else{
                alert('No ha seleccionado foto!')
            }
        }
    }


    render(){

        const { image, hasCameraPermission } = this.state;

        const { visible } = this.state;


        if (hasCameraPermission === null) {
            return <View />
        }
        else if (hasCameraPermission === false) {
            return <Text>Acceso a la galeria ha sido denegado.</Text>;
        }
        else {

            return(

                


                <View style={{  alignItems: "center", justifyContent: "center", backgroundColor: "white", flex:1}}>
                    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "white",marginTop:'5%', width:'100%',height:'89%' }}>
                        <View>
                            <Text style={{fontWeight: 'bold', color: 'black', fontSize:31}}>Bienvenido</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:'21%',}}>
                            <TouchableHighlight style={{alignItems: 'center',backgroundColor: '#F46036',padding: 10.2,width:121,height:95,borderRadius: 4,borderWidth: 1,borderColor: 'black',justifyContent:'center'}} onPress = {()=>this.props.navigation.navigate('Camara')}>       
                                <Entypo name="camera" size={62} color="white" />
                            </TouchableHighlight> 
                            <TouchableHighlight style={{alignItems: 'center',backgroundColor: '#F46036',padding: 18.2,width:121,height:95,borderRadius: 4,borderWidth: 1,borderColor: 'black',justifyContent:'center', marginLeft:'5.1%'}} onPress={this._getPhotoLibrary.bind(this)}>       
                                <FontAwesome name="photo" size={62} color="white" />
                            </TouchableHighlight> 
                        </View>
                        <View>
                            <Image source={{uri: "https://image.freepik.com/vector-gratis/tortuga-dibujos-animados-lindo-ilustracion_33070-3483.jpg"}} style= {{height: 225,width: 272, marginTop: "15%"}}/>
                        </View>

                    </View>
                    <View style={{height:63.5, flexDirection: 'row',width:'100%',justifyContent:'center',backgroundColor:'#1B7FCF',borderWidth:1}}>
                            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Tutorial')} style={{marginLeft:'1.5%',marginRight:'1.5%',alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'5.2%'}}>
                                    <Entypo name="info-with-circle" color='#F9E9EC' size={59.5} />
                                </View>
                            </TouchableHighlight>
                    </View>
                </View>  
            )
        }
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

  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }


});
