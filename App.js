/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View,Image } from 'react-native';
import { Router, Scene,Actions  } from 'react-native-router-flux';
import { Container,Input,Item ,Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


//component application
import Login from './components/Login'
import Page1 from './components/Page1'
import Page2 from './components/Page2'




export default class App extends Component {
     
     constructor(props){
          super(props)
          Actions.push('Login')
     }
  render() {
    return (
          <Router>
               <Scene key="root">
                    <Scene key="Login" hideNavBar={true} component={Login}/>
                    <Scene key="page1key" hideNavBar={true} component={Page1} title="Page1"/>
                    <Scene key="page2key" hideNavBar={true} component={Page2} title="Page2"/>
               </Scene>
          </Router>

    );
  }
}






