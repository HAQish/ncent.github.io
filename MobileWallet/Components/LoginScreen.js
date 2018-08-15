import React, {Component} from 'react';
import {Alert, Button, FlatList, TextInput, StyleSheet, Text, View,
 TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback  } from 'react-native';
import {connect} from 'react-redux';
import { pinChanged, loginUser} from '../Actions';
import {Spinner} from './Common';
import {Actions} from 'react-native-router-flux';
import CodeInput from 'react-native-code-input';
import {Icon} from 'react-native-elements';
 
class LoginScreen extends Component {


  onPinChanged(text) {
    this.props.pinChanged(text);
  }
  
  componentWillReceiveProps(newProps) {
    // doing this twice cause props update again
    if (newProps.password.length === 4) {   
      console.log(newProps);
      let password = newProps.password;
      this.props.loginUser({password});
    } 
  }
  renderError() {
    if (this.props.error) {
      return (
        <View> 
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
    return (
        <View> 
          <Text style={styles.errorTextStyle}>
             {' '}
          </Text>
        </View>
      );
  }
  // renderLoginButton() {
  //   if (this.props.loading) {
  //     return (<Spinner size="large"/>);
  //   }
  //   return (
  //     <TouchableOpacity onPress= {this.onButtonPress.bind(this)}>
  //             <View style = {{backgroundColor: '#5c4da0', alignItems: 'center', 
  //                             justifyContent: 'center', borderRadius: 30, height: 50, margin: 70, marginTop: 0}}
  //                    >
  //                    <Text style={{color:'white', fontSize: 25}}> Login </Text>
  //             </View>
  //       </TouchableOpacity>
  //   )
  // }

  passwordToIcons() {
    if (this.props.password.length === 0) {
      return (
        <View style={{flexDirection: 'row'}} >
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
        </View>
        )
    }
    if (this.props.password.length === 1) {
      return (
        <View style={{flexDirection: 'row'}} >
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
        </View>
      )
    }
    if (this.props.password.length === 2) {
      return (
        <View style={{flexDirection: 'row'}} >
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
        </View>
      )
    }
    if (this.props.password.length === 3) {
      return (
        <View style={{flexDirection: 'row'}} >
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle-thin' color='#4c3e99' />
        </View>
      )
    }
    if (this.props.password.length === 4) {
      return (
        <View style={{flexDirection: 'row'}} >
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
          <View style={{marginHorizontal: 15}} />
          <Icon size={40} type='font-awesome' name='circle' color='#4c3e99' />
        </View>
      )
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableWithoutFeedback onPress={() => Actions.popTo("LoginOrSignup")}>
            <View>
              <Text style={styles.navBarButton}>Back</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.navBarHeader}>Welcome</Text>
          <Text style={styles.navBarButton}></Text>
        </View>
        <View style={{ height: 8}} />
        <View style={{margin: 12, marginBottom: 40}}>         
          <View style={{paddingBottom: 40,
    paddingHorizontal: 20}}>

        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
          <Text style={{fontSize: 20}}> Please Enter Your PIN </Text> 
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
            {this.passwordToIcons()}        
        </View>
        
          <TextInput
            style={{height: 0, paddingLeft: 30, fontSize: 0}}
            secureTextEntry={true}
            ref='pin_input'
            autoFocus={true}
            placeholder="Password"
            keyboardType="number-pad"
            onChangeText={this.onPinChanged.bind(this)}
            value={this.props.password}
          />
        
        
          </View>
          
        </View>


        {this.renderError()}
        
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorTextStyle: {
    margin: 3,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 75,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: .2,
    zIndex:999
  },
  navBarHeader: {
    flex: 1,
    color: '#4c3e99',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 25,
    fontSize: 20,
  },
  navBarButton: {
    color: '#4c3e99',
    textAlign:'center',
    paddingTop: 25,
    width: 64
  },
});

const mapStateToProps = state => {
  const {email, password, error, loading} = state.auth;
  return {email, password, error, loading};

};

module.exports = connect(mapStateToProps, 
  {pinChanged,  loginUser})(LoginScreen);



