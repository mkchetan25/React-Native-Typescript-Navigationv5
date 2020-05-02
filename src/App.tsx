import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { Provider } from "react-redux";
import Aboutscreen from "./components/about/AboutScreen";
import Expensescreen from "./components/expense/ExpensePage";
import Homescreen from "./components/home/HomeScreen";
import { store } from "./redux/store/configureStore";
// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`
// });

interface RoutesProps {
  'Home': undefined,
  'About': undefined,
  'Expense': undefined,
}


const Stack = createStackNavigator();

const App: FC<RoutesProps> = ({}) => {
  // const { container, header } = styles;

  return (
    // <View style={container}>
    //   <View style={header}>
    //     <Header title="My First App!"></Header>
    //   </View>
    //   <View style={content}>
    //     <Text>Welcome to React Native test 123!</Text>
    //     <Text>To get started, edit App.tsx</Text>
    //     <Text>{instructions}</Text>
    //   </View>
    // </View>
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homescreen}
            options={({title: "test"})} />
          <Stack.Screen name="About" component={Aboutscreen} />
          <Stack.Screen name="Expense" component={Expensescreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   header: {
//     flex: 1
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   },
//   content: {
//     flex: 6,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });