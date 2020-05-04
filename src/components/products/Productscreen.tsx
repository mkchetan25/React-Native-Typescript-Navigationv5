import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeStackParamList } from '../../navigations/types';

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface ProductProps {
  navigation: StackNavigationProp<HomeStackParamList, 'Product'>;
  route: RouteProp<HomeStackParamList, 'Product'>;
}

export default class Productscreen extends Component<ProductProps, any> {

  render() {
    const { container, content } = styles;
    return (
      <View style={container}>
        <View style={content}>
        <Text>individual product screen</Text>
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
