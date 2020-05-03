import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { HomeStackNavProps } from '../../navigations/HomeStackParamList';
import { startEditExpense, startGetExpense, startRemoveExpense } from '../../redux/actions/expenses';
import { AppState } from '../../redux/store/configureStore';
import { AppAction } from '../../redux/types/actions';
import { Expense } from '../../redux/types/Expense';


interface ExpenseProps {
    // navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    navigation: HomeStackNavProps<'Expense'>;
    id?: string;
    color?: string;
}

interface ExpenseState {

}

type Props = ExpenseProps & LinkDispatchProps & LinkStateProp;

class Expensescreen extends Component<Props, ExpenseState> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  }

  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  }

  componentDidMount() {
    this.props.startGetExpense();
  }

  render() {
    const { expenses } = this.props;
    const { container, content } = styles;
    return (
      <View style={container}>
        {
          expenses.map((exp: Expense) => {
            return (
              <View style={content}>
                <View>
                    <Text>{exp.id}</Text>
                    <Text>{exp.amount}</Text>
                    <Button
                      title="Edit"
                      onPress={() => this.onEdit(exp)}
                    >Edit
                    </Button>
                    <Button
                      title="Remove"
                      onPress={() => this.onRemove(exp.id)}
                    >Remove</Button>
                </View>
              </View>
            );
          })
        }
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
    expenses: Expense[]
}

interface LinkDispatchProps{
  startGetExpense: () => void;
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
}

const mapStateToProps = (state: AppState, props: ExpenseProps): LinkStateProp => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: ExpenseProps): LinkDispatchProps =>
({
  startGetExpense: bindActionCreators(startGetExpense, dispatch),
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Expensescreen)