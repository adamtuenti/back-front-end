import React, { Component } from 'react';
import {ImageBackground,StyleSheet,TouchableHighlight,Text,View,Dimensions,Image} from 'react-native';
import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';


const image = { uri: 'https://github.com/adamtuenti/Proyecto-Integrador/blob/main/imagenes/fondo.jpg?raw=true' };


export default class Tutorial extends Component {

  _renderDotIndicator() {
        return <PagerDotIndicator style={{height:'2.5%',backgroundColor:'#F46036',borderEndColor:"#1B7FCF"}} pageCount={3} />;
    }



    render(){

      

        return(

          <View style={{flex:1,justifyContent:'center'}}>

                <IndicatorViewPager
                style={{flex:1,color:'#1B7FCF'}}
                indicator={this._renderDotIndicator()}
                >

               

          
                <View style={{alignItems: "center", justifyContent: "center",alignContent: 'center' }}>
                  <Text style={{fontWeight: 'bold', color: 'black', fontSize:35}}>Paso 1</Text>
                  <Text style={{color: 'black', fontSize:18.2,marginTop:'8.5%',width:'90%',textAlign:'center'}}>En la página de inicio, seleccione la forma en la que desea cargar la imagen a ser analizada</Text>
                  <Image source={{uri: "https://github.com/adamtuenti/back-front-end/blob/main/imagenes/fotos.gif?raw=true"}} style= {{height: 225,width: 350, marginTop: "12.5%",borderWidth:1,borderColor:'black'}}/>
                </View>


                <View style={{alignItems: "center", justifyContent: "center" }}>
                  <Text style={{fontWeight: 'bold', color: 'black', fontSize:35}}>Paso 2</Text>
                  <Text style={{color: 'black', fontSize:18.2,marginTop:'8.5%',width:'90%',textAlign:'center'}}>Una vez seleccionada la imagen, presione confirmar para analizarla </Text>
                  <Image source={{uri: "https://github.com/adamtuenti/back-front-end/blob/main/imagenes/paso2.gif?raw=true"}} style= {{height: 345,width: 250, marginTop: "11%",borderWidth:2,borderColor:'black'}}/>
                </View>



                <View style={{alignItems: "center", justifyContent: "center" }}>
                  <Text style={{fontWeight: 'bold', color: 'black', fontSize:35}}>Paso 3</Text>
                  <Text style={{color: 'black', fontSize:18.2,marginTop:'8.5%',width:'90%',textAlign:'center'}}>Se le mostraran las 3 posibles opciones, las cuales podra deslizar la pantalla para verlas</Text>
                  <Image source={{uri: "https://github.com/adamtuenti/back-front-end/blob/main/imagenes/carousel.gif?raw=true"}} style= {{height: 350,width: 225, marginTop: "11%",borderColor:'black'}}/>
              </View>




               

        
                
          </IndicatorViewPager>

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
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    // backgroundColor: 'white',
    // opacity: 0.8

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