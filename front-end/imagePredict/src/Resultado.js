import React, { Component } from 'react';
import {StyleSheet,TouchableHighlight,Text,View,Image} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';
import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';


export default class Resultado extends Component {

    
    constructor(props){
        
    super(props)
        this.state = {
            resultado : '',
            ready: false,

        }
    
    }

    componentDidMount = () => {
        this.obtenerResultado();
    }


    obtenerResultado(){

        var dataToSend = {imagenAnimal: imageBase64}
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        let response = fetch('http://192.168.100.126:8000/analizarImagen/', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
        },
        body: formBody,
        }) .then(response=>response.json())
        
        .then(response=>{ 
           this.setState({resultado:response,
                        ready:true});

        })
        
        .catch((error) => {
            alert(JSON.stringify(error));

        });

    }
    


    render(){
        if(this.state.ready){

                

        return(

            <View style={{flex:1,justifyContent:'center'}}>
                <IndicatorViewPager
                style={{flex:1,color:'#1B7FCF'}}
                indicator={this._renderDotIndicator()}
                >

        <View style={{alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:25}}>Resultado 1</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'5.5%'}}>Nombre común</Text>
            <Text style={{color: '#515254', fontSize:15.5}}>{this.state.resultado[0].nombreAnimal}</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'3.5%'}}>Nombre científico</Text>
            <Text style={{color: '#515254', fontSize:15.5,fontStyle: 'italic'}}>{this.state.resultado[0].nombreTecnico}</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'3.5%'}}>Probabilidad</Text>
            <Text style={{color: '#515254', fontSize:15.5}}>{Number((this.state.resultado[0].accuracy)).toFixed(0)} %</Text>
            <Image source={{uri: "http://192.168.100.126:8000"+this.state.resultado[0].imagenAnimal}} style= {{height: 240,width: 240, marginTop: "7.5%",borderWidth:2,borderColor:'black'}}/>
        

            

            <View style={{flexDirection:'row',marginTop:'5.5%'}}>
                <TouchableHighlight style={{alignItems: 'center',backgroundColor: '#F46036',padding: 10,width:155,borderRadius: 5,borderWidth: 1}}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize:16.2, textAlign: 'center'}}>{this.state.resultado[1].nombreAnimal}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{alignItems: 'center',backgroundColor: '#F46036',padding: 10,width:155,borderRadius: 5,borderWidth: 1,marginLeft:'5%'}}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize:16.2, textAlign: 'center'}}>{this.state.resultado[2].nombreAnimal}</Text>
                </TouchableHighlight>
            </View>






        </View>
            




        <View style={{alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:25}}>Resultado 2</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'7.5%'}}>Nombre común</Text>
            <Text style={{color: '#515254', fontSize:15.5}}>{this.state.resultado[1].nombreAnimal}</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'3.5%'}}>Nombre científico</Text>
            <Text style={{color: '#515254', fontSize:15.5,fontStyle: 'italic'}}>{this.state.resultado[1].nombreTecnico}</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'3.5%'}}>Probabilidad</Text>
            <Text style={{color: '#515254', fontSize:15.5}}>{Number((this.state.resultado[1].accuracy)).toFixed(0)} %</Text>
            <Image source={{uri: "http://192.168.100.126:8000"+this.state.resultado[1].imagenAnimal}} style= {{height: 255,width: 262, marginTop: "11%",borderWidth:2,borderColor:'black'}}/>
        </View>


        <View style={{alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:25}}>Resultado 3</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'7.5%'}}>Nombre común</Text>
            <Text style={{color: '#515254', fontSize:15.5}}>{this.state.resultado[2].nombreAnimal}</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'3.5%'}}>Nombre científico</Text>
            <Text style={{color: '#515254', fontSize:15.5,fontStyle: 'italic'}}>{this.state.resultado[2].nombreTecnico}</Text>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:18.2,marginTop:'3.5%'}}>Probabilidad</Text>
            <Text style={{color: '#515254', fontSize:15.5}}>{Number((this.state.resultado[2].accuracy)).toFixed(0)} %</Text>
            <Image source={{uri: "http://192.168.100.126:8000"+this.state.resultado[2].imagenAnimal}} style= {{height: 255,width: 262, marginTop: "11%",borderWidth:2,borderColor:'black'}}/>
        </View>




               

        
                
    </IndicatorViewPager>

        {/* Footer */}
        <View style={{height:63.5, flexDirection: 'row',width:'100%',justifyContent:'center',backgroundColor:'#1B7FCF',borderWidth:1}}>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Main')} style={{marginLeft:'1.5%',marginRight:'1.5%',alignItems:'center',justifyContent:'center'}}>
                <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'5.2%'}}>
                    <MaterialCommunityIcons name="home-circle" color='#F9E9EC' size={65.5} />
                </View>
            </TouchableHighlight>
        </View>

                
    </View>

     
);

        }

        
    else{
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontWeight: 'bold', color: '#515254', fontSize:25}}>Analizando</Text>
            <Image source={{uri: "https://i.gifer.com/origin/3f/3face8da2a6c3dcd27cb4a1aaa32c926_w200.gif"}} style= {{height: 225,width: 210, marginTop: "8%"}}/>    
        </View>
        )
    }

      
}
 
   
 
_renderDotIndicator() {
    return <PagerDotIndicator style={{height:'2.5%',backgroundColor:'#F46036',borderEndColor:"#1B7FCF"}} pageCount={3} />;
}

}

const styles = StyleSheet.create({
 activeImageContainer: {
  flex: 1,
  height: "15%",
  backgroundColor: "#eee",
  borderBottomWidth: 0.5,
  borderColor: "#fff"
 },
});