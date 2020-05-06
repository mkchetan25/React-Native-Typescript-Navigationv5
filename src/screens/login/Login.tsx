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
import { startLogin } from '../../redux/actions/login';
import { AppState } from '../../redux/store/configureStore';
import { AppAction } from '../../redux/types/actions';
import { User_Data } from '../../redux/types/Expense';
import { AuthService } from '../../services/auth';
import { showAlert, validatorDialog } from "../../utils/Dialogs";
import EditView from "../../components/EditView";

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface LoginProps {
  navigation: StackNavigationProp<ProfileStackParamList, 'Login'>;
  route: RouteProp<ProfileStackParamList, 'Login'>;
}

type Props = LoginProps & LinkDispatchProps & LinkStateProp;

class Loginscreen extends Component<Props, any> {
  private auth: AuthService;

  constructor(props: Props) {
    super(props);
    this.state = {
        username: "",
        password: "",
        // todo - delete in release
        // username: "demo",
        // password: "demo",
        isLoading: false,
    };
    this.auth = new AuthService();
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
          <View style={appStyles.headerContainer}/>
          <View style={styles.editContainer}>
              <ScrollView>
                  <EditView
                      keyboardType={"email-address"}
                      autoCorrect={false}
                      // autoCompleteType={"username"}
                      title="email"
                      editable={true}
                      // text={this.state.username}
                      text="test"
                      onChangeText={(text) => (this.setState({username: text}))}/>
                  <EditView
                    autoCorrect={false}
                    secureTextEntry={true}
                    editable={true}
                    // autoCompleteType={"password"}
                    title="password"
                    // text={this.state.password}
                    text="test"
                    onChangeText={(text) => (this.setState({password: text}))}/>
                  <Text style={[appStyles.textDef, {margin: 22}]}>
                    Please use "demo" for login and "demo" for password
                  </Text>
              </ScrollView>
              <Text
                style={[appStyles.textButton,
                  {textTransform: 'uppercase'},
                  this.state.isLoading ? appStyles.textButtonInactive : appStyles.textButtonActive]
                }

                // disabled={this.state.isLoading}
                onPress={this._onLogin.bind(this)}>
                Login
              </Text>
              <Text
                  style={[appStyles.textButton,
                      {textTransform: 'uppercase'},
                      this.state.isLoading ? appStyles.textButtonInactive : {},
                      {marginTop: 8}]
                  }
                  // disabled={this.state.isLoading}
                  onPress={this._onRegister.bind(this)}>
                  Register
              </Text>
              {/* <Text
                  style={[appStyles.textButton,
                      {textTransform: 'uppercase'},
                      this.state.isLoading ? appStyles.textButtonInactive : {},
                      {borderWidth: 0, marginTop: 8}]
                  }
                  // disabled={this.state.isLoading}
                  onPress={this._onResetPassword.bind(this)}>
                  Reset Password
              </Text> */}
          </View>
          <Image
              style={styles.avatarContainer}
              source={require('../../assets/ic_profile_cover.png')}/>
      </View>
    );
  }

  _onLogin = async () => {

    if (this.state.isLoading) {
        return
    }

    if (validatorDialog(this.state.username, "Username is empty")
        || validatorDialog(this.state.password, "Password is empty")) {
        return;
    }

    this.setState({isLoading: true});

    const user = await this.auth.isValidUser(this.state.username, this.state.password) as User_Data;
    if (user === undefined) {
      showAlert("Login", "Can't get data from server");
    } else if (user.error) {
        showAlert("Login", user.error);
    } else {
      this.props.startLogin(user);
      this.props.navigation.goBack();
    }

    // login the customer via Wordpress API and get the access token
    // const json = await WPUserAPI.login(this.state.username, this.state.password);

    // this.setState({isLoading: false});

    // console.log("_onLogin json: " + JSON.stringify(json));

    // if (json === undefined) {
    //     showAlert("Login", "Can't get data from server");
    // } else if (json.error) {
    //     showAlert("Login", json.error);
    // } else {

    //     let customers = await WooWorker.getCustomerById(json.user.id);
    //     //console.log("customers:" + JSON.stringify(customers));

    //     let userMeta = await WPUserAPI.getUserMeta(json.cookie);
    //     //console.log("userMeta:" + JSON.stringify(userMeta));

    //     this.props.login(customers, userMeta, json.cookie);
    //     this.props.navigation.goBack();
    // }
  };

  _onRegister = () => {

    if (this.state.isLoading) {
        return
    }

    this.props.navigation.navigate('Register')
  };

  _onResetPassword = async () => {

    if (validatorDialog(this.state.username, "Username is empty")) {
        return;
    }

    this.setState({isLoading: true});

    // login the customer via Wordpress API and get the access token
    // const json = await WPUserAPI.resetPassword(this.state.username);

    // this.setState({isLoading: false});

    // console.log("_onResetPassword json: " + JSON.stringify(json));

    // if (json === undefined) {
    //     showAlert("Reset Password", "Can't get data from server");
    // } else if (json.error) {
    //     showAlert("Reset Password", json.error);
    // } else {
    //     showAlert("Reset Password", json.msg);
    // }
  };
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
  startLogin: (user: User_Data) => void;
}

const mapStateToProps = (state: AppState, props: LoginProps): LinkStateProp => ({
  user: state.login
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: LoginProps): LinkDispatchProps =>
({
  startLogin: bindActionCreators(startLogin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginscreen)
