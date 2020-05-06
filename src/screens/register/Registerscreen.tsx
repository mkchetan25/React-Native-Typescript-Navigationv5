import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import appStyles from "../../common/Styles";
import * as Theme from "../../common/Theme.json";
import { ProfileStackParamList } from '../../navigations/types';
import { startRegister } from '../../redux/actions/login';
import { AppState } from '../../redux/store/configureStore';
import { AppAction } from '../../redux/types/actions';
import { User_Data } from '../../redux/types/Expense';
import { AuthService } from '../../services/auth';
import { emailValidatorDialog, showAlert, validatorDialog } from "../../utils/Dialogs";
import EditView from "../../components/EditView";

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface RegisterProps {
  navigation: StackNavigationProp<ProfileStackParamList, 'Register'>;
  route: RouteProp<ProfileStackParamList, 'Register'>;
}

type Props = RegisterProps & LinkDispatchProps & LinkStateProp;

class Registerscreen extends Component<Props, any> {
  private auth: AuthService;
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      town: ""
      //todo - delete in release
      // username: "demo",
      // email: "demo@test.com",
      // firstName: "Jon",
      // lastName: "Smith",
      // password: "demo",
      // isLoading: false,
    };
    this.auth = new AuthService();
  }

  _onRegister = async () => {

    if (validatorDialog(this.state.username, "Username is empty")
      || validatorDialog(this.state.email, "Email is empty")
      || emailValidatorDialog(this.state.email)
      || validatorDialog(this.state.firstName, "First name is empty")
      || validatorDialog(this.state.lastName, "Last name is empty")) {
      return;
    }

    this.setState({isLoading: true});

    console.log("##" + this.state.username);

    // login the customer via Wordpress API and get the access token
    // const json = await WPUserAPI.register(this.state.username, this.state.email, this.state.firstName, this.state.lastName, this.state.password);

    // this.setState({isLoading: false});

    // console.log("_onRegister json: " + JSON.stringify(json));

    // if (json === undefined) {
    //   showAlert("Register", "Can't get data from server");
    // } else if (json.error) {
    //   showAlert("Register", json.error);
    // } else {
    //   let customers = await WooWorker.getCustomerById(json.user_id);
    //   //console.log("customers:" + JSON.stringify(customers));

    //   let userMeta = await WPUserAPI.getUserMeta(json.cookie);
    //   //console.log("userMeta:" + JSON.stringify(userMeta));

    //   this.props.login(customers, userMeta, json.cookie);
    //   this.props.navigation.goBack();
    // }

    const user = await this.auth.registerUser(this.state.email, this.state.userName, this.state.password,
      this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.town) as User_Data;

    this.setState({isLoading: false});

    console.log("_onRegister json: " + JSON.stringify(user));

    if (user === undefined) {
      showAlert("Register", "Can't get data from server");
    } else if (user.error) {
      showAlert("Register", user.error);
    } else {
      // let customers = await WooWorker.getCustomerById(json.user_id);
      //console.log("customers:" + JSON.stringify(customers));

      // let userMeta = await WPUserAPI.getUserMeta(json.cookie);
      //console.log("userMeta:" + JSON.stringify(userMeta));

      this.props.startRegister(user);
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={appStyles.headerContainer}/>
        <View style={styles.editContainer}>
          <ScrollView>
            <EditView
              editable={true}
              autoCorrect={false}
              // autoCompleteType={"username"}
              title="Username"
              text={this.state.username}
              onChangeText={(text) => (this.setState({username: text}))}/>
            <EditView
              editable={true}
              keyboardType={"email-address"}
              autoCorrect={false}
              // autoCompleteType={"username"}
              title="Email"
              text={this.state.email}
              onChangeText={(text) => (this.setState({email: text}))}/>
            <EditView
              editable={true}
              autoCorrect={false}
              title="First Name"
              text={this.state.firstName}
              onChangeText={(text) => (this.setState({firstName: text}))}/>
            <EditView
              editable={true}
              autoCorrect={false}
              title="Last Name"
              text={this.state.lastName}
              onChangeText={(text) => (this.setState({lastName: text}))}/>
            <EditView
              editable={true}
              autoCorrect={false}
              secureTextEntry={true}
              // autoCompleteType={"password"}
              title="Password"
              text={this.state.password}
              onChangeText={(text) => (this.setState({password: text}))}/>
            <EditView
              editable={true}
              autoCorrect={false}
              secureTextEntry={false}
              // autoCompleteType={"password"}
              title="Phone Number"
              text={this.state.phoneNumber}
              onChangeText={(text) => (this.setState({phoneNumber: text}))}/>
            <EditView
              editable={true}
              autoCorrect={false}
              secureTextEntry={false}
              // autoCompleteType={"password"}
              title="Town"
              text={this.state.town}
              onChangeText={(text) => (this.setState({town: text}))}/>
          </ScrollView>
          <Text
            style={[appStyles.textButton,
                {textTransform: 'uppercase'},
                this.state.isLoading ? appStyles.textButtonInactive : appStyles.textButtonActive]
            }
            // disabled={this.state.isLoading}
            onPress={this._onRegister.bind(this)}>
            Register
          </Text>
        </View>
        <Image
          style={styles.avatarContainer}
          source={require('../../assets/ic_profile_cover.png')}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: Theme.secondaryColor,
  },
  editContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: Theme.mainBGColor,
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      padding: 22,
      marginTop: 72,
      marginLeft: 22,
      marginRight: 22
  },
  avatarContainer: {
      borderRadius: 50,
      height: 100,
      width: 100,
      position: 'absolute',
      alignSelf: 'center',
      top: 0,
  },
});

interface LinkStateProp{
  user: User_Data
}

interface LinkDispatchProps{
  startRegister: (user: User_Data) => void;
}

const mapStateToProps = (state: AppState, props: RegisterProps): LinkStateProp => ({
  user: state.login
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: RegisterProps): LinkDispatchProps =>
({
  startRegister: bindActionCreators(startRegister, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registerscreen)