import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { HomeStackParamList } from '../../navigations/types';
import Header from "../header/Header";

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface HomeProps {
  navigation: StackNavigationProp<HomeStackParamList, 'Home'>;
  route: RouteProp<HomeStackParamList, 'Home'>;
}

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`
});

export default class Homescreen extends Component<HomeProps, any> {

  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.goBack();
  };

  render() {
    const { container, header, content } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Header title={this.props.route.name}
            leftButtonPress={() => this.toggleDrawer}
          ></Header>
        </View>
        <View style={content}>
          <Text>Welcome to React Native test 123!</Text>
          <Text>To get started, edit App.tsx</Text>
          <Text>{instructions}</Text>
        </View>
        <Button
          title="Go to Expense"
          onPress={() => this.props.navigation.navigate('Product')}
        />
        <Button
          title="Go to Counter"
          onPress={() => this.props.navigation.navigate('ProductList')}
        />
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
    header: {
      flex: 1
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
    content: {
      flex: 6,
      alignItems: 'center',
      justifyContent: 'center'
    }
});
