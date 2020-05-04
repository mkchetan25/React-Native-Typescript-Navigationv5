import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeStackParamList } from '../../navigations/types';

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface ProductListProps {
  navigation: StackNavigationProp<HomeStackParamList, 'ProductList'>;
  route: RouteProp<HomeStackParamList, 'ProductList'>;
}

export default class ProductListscreen extends Component<ProductListProps, any> {

  render() {
    const { container, content } = styles;
    return (
      <View style={container}>
        <View style={content}>
        <Text>product list screen</Text>
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
