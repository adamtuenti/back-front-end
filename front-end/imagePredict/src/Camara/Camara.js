import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Toolbar from './toolbar.component';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default class Camara extends React.Component {
    camera = null;

    state = {
        captures: [],
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () => {

       
            if (this.camera) {
                const options = { quality: 0.5, base64: true };
                const data = await this.camera.takePictureAsync(options) // options)
                .then(data => {
                    imageBase64 = data.base64
                    fotoEvidencia = data.uri
                    if(imageBase64!=''){
                            this.props.navigation.navigate('Analizar')

                        }
                        else{
                            alert('No ha tomado foto!')
                    }

                }

                    
                    

                )
                .catch(error => console.log('eror', error));
               // console.log('Exiting takePicture()');
            }
      
        // const photoData = await this.camera.takePictureAsync();
        // this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
        // fotoEvidencia = photoData.uri
        // prueba = photoData.base64
        // console.log(photoData)
        // if(fotoEvidencia!=''){
        //         this.props.navigation.navigate('Analizar')

        //     }
        //     else{
        //         alert('No ha tomado foto!')
        //     }

    };

    handleLongCapture = async () => {
        const videoData = await this.camera.recordAsync();
        this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    };
    
     async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
            <View>
                <Camera
                    type={cameraType}
                    flashMode={flashMode}
                    style={styles.preview}
                    ref={camera => this.camera = camera}
                />
            </View>

            <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    onCaptureIn={this.handleCaptureIn}
                    onCaptureOut={this.handleCaptureOut}
                    onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
            />
            </React.Fragment>
        );
    };
};

const styles = StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        marginTop:25
    },
});