
import React, { Component } from 'react';
import {StyleSheet,ImageBackground,Text,Image,View} from 'react-native';
import { Container,Item, Input,Content,Button} from 'native-base';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
MyCustomComponent = Animatable.createAnimatableComponent(Button);


class Login extends Component {
     constructor(props) {
          super(props);
          this.state = {  }
     }
     render() { 
          return ( 

               <ImageBackground resizeMode="cover" source={require('../assets/bg/bgmain.png')} style={styles.imgBackground}>
                    <Content>

                         <Container style={[styles.wrapParent,styles.bgTransparent]}>
                              <Container style={[styles.header,styles.bgTransparent]}/>
                                  

                              <Container style={[styles.middle]}>
                                  
                                  
                                        <Image resizeMode="cover" style={styles.imageLogo} source={require('../assets/bg/logo1.png')}/>
                                        
                                        <Item rounded style={formStyles.itemStyles}>
                                             <Icon style={formStyles.iconStyles} name='email' />
                                             <Input autoCapitalize="none" style={formStyles.inputStyles}/>
                                        </Item>
                                        <Item rounded style={formStyles.itemStyles}>
                                             <Icon style={formStyles.iconStyles} name='key-variant' />
                                             <Input autoCapitalize="none" style={formStyles.inputStyles}/>
                                        </Item>
                                        <Animatable.View style={{width:'100%'}} animation="shake" iterationCount="infinite" direction="alternate-reverse">

                                             <Button block warning style={formStyles.buttonStyles}>
                                                  <Text>LOGIN</Text>
                                             </Button>
                                        </Animatable.View>
                              </Container>

                              <Container style={[styles.footer,styles.bgTransparent]}/>

                         </Container>
                    </Content>
               </ImageBackground>
               
          );
     }
}

const formStyles = StyleSheet.create({
     itemStyles:{
          borderBottomWidth: 0,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          backgroundColor:'rgba(17, 17, 17,0.8)',
          marginLeft:40,
          marginRight:40,
          marginBottom:20,
     },
     iconStyles:{
          color:'#FFF',
          fontSize:25,marginLeft:20,
     },
     inputStyles:{
          marginLeft:10,
          color:'#FFF',
          fontSize:25,
     },
     buttonStyles:{
          marginLeft:40,
          marginRight:40,
     }
})

const styles = StyleSheet.create({
     imgBackground : 
     {
          width: '100%', height: '100%',
     },
     imageLogo:
     {
          width:'80%',
          height:100
     },
     wrapParent : 
     {
          flex:1
     },
     bgTransparent: 
     {
          backgroundColor:'transparent'
     },
     header:
     {
          flex:1,
          alignItems:'center',
          justifyContent: 'center',
     },
     middle:{
          flex:2,
          justifyContent: 'center',
          alignItems:'center',
          backgroundColor:'rgba(43, 42, 42,0.5)'
     },
     footer :{
          flex:1
     }
})
 
export default Login;