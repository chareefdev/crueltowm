import React, {Component} from 'react';
import {Platform, StyleSheet,View,Text,YellowBox} from 'react-native'
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { Actions } from 'react-native-router-flux'; 
class Page1 extends Component {
     state = {  }
     render() { 
          return (
               <Text onPress={() => Actions.page2key()}>this is page1</Text>
          );
     }
}
 
export default Page1;