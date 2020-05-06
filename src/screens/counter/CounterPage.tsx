import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { HomeStackParamList } from '../../navigations/types';
import { startDecreaseCounter, startIncreaseCounter } from '../../redux/actions/counter';
import { AppState } from '../../redux/store/configureStore';
import { AppAction } from '../../redux/types/actions';
import { Counter } from '../../redux/types/Expense';

interface CounterProps {
    // navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    // navigation: HomeStackNavProps<'Counter'>;
    navigation: StackNavigationProp<HomeStackParamList, 'ProductList'>;
    route: RouteProp<HomeStackParamList, 'ProductList'>;
    id?: string;
    color?: string;
}

interface CounterState {

}

type Props = CounterProps & LinkDispatchProps & LinkStateProp;

class Counterscreen extends Component<Props, CounterState> {
  onIncrease = () => {
    const counter: Counter = {
        count: 1
    }
    this.props.startIncreaseCounter(counter);
  }

  onDecrease = () => {
    const counter: Counter = {
        count: 1
    }
    this.props.startDecreaseCounter(counter);
  }

  render() {
    const {count} = this.props;
    const { container } = styles;
    return (
      <View style={container}>
          <Button title="increase" onPress={this.onIncrease}></Button>
            <Text>{count}</Text>
          <Button title="decrease" onPress={this.onDecrease}></Button>
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

interface LinkStateProp{
    count: number
}

interface LinkDispatchProps{
    startIncreaseCounter: (counter: Counter) => void;
    startDecreaseCounter: (counter: Counter) => void;
}

const mapStateToProps = (state: AppState, props: CounterProps): LinkStateProp => ({
    count: state.counter.count
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: CounterProps): LinkDispatchProps =>
({
  startIncreaseCounter: bindActionCreators(startIncreaseCounter, dispatch),
  startDecreaseCounter: bindActionCreators(startDecreaseCounter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counterscreen)