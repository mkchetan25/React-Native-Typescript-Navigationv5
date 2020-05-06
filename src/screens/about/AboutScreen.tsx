import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ProfileStackParamList } from '../../navigations/types';
import Header from "../header/Header";

interface AboutProps {
  navigation: DrawerNavigationProp<ProfileStackParamList, 'About'>;
  route: RouteProp<ProfileStackParamList, 'About'>;
}

export default class Aboutscreen extends Component<AboutProps, any> {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.openDrawer();
  };

  render() {
    const { container, header } = styles;
    return (
        <View style={container}>
        <View style={header}>
            <Header title="My First App!"
            leftButtonPress={() => this.toggleDrawer}
            ></Header>
        </View>

        <Button
            title="Go to Home"
            onPress={() => this.toggleDrawer}
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