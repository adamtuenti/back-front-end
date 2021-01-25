import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Main from './src/Main';
import Analizar from './src/Analizar';
import Camara from './src/Camara/Camara';
import Home from './src/Home';
import Resultado from './src/Resultado';
import Tutorial from './src/Tutorial';


const AppNavigator = createStackNavigator(
  {
   Home, Main, Camara, Analizar, Resultado, Tutorial
  },  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;