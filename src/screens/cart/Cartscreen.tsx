import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CartStackParamList } from '../../navigations/types';

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface CartProps {
  navigation: StackNavigationProp<CartStackParamList, 'Cart'>;
  route: RouteProp<CartStackParamList, 'Cart'>;
}

export default class Cartscreen extends Component<CartProps, any> {

  render() {
    const { container, content } = styles;
    return (
      <View style={container}>
        <View style={content}>
        <Text>cart screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    content: {
      flex: 6,
      alignItems: 'center',
      justifyContent: 'center'
    }
});
