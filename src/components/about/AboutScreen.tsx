import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "../header/Header";

// interface AboutProps {
//     title: string,
//     navigation: any
// }

export default class Aboutscreen extends Component {
  render() {
    const { container, header } = styles;
    return (
        <View style={container}>
        <View style={header}>
            <Header title="My First App!"></Header>
        </View>

        {/* <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
        /> */}
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