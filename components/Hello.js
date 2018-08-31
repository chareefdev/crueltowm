import React, { Component } from 'react';
import { Text,View } from 'react-native';

export default class Hello extends Component {
     constructor(props){
          super(props)
          this.state = {plus:0,names:'chareef'};

          setInterval(()=>{
               
               this.setState((pre)=>{
                    console.log(pre);
                    var a = pre.plus+1
                    return {plus:a,names:pre.names}
               })

          },1000)
     }
     state = {  }
     render() { 
          return (
               <View>
                    <Text style={{ textAlign: 'center'}}>{this.state.plus}</Text>
                    <Text style={{ textAlign: 'center'}}>{this.state.names}</Text>
                    <Text style={{ textAlign: 'center'}}>{this.props.wha}</Text>
               </View>
          );
     }
}
 
