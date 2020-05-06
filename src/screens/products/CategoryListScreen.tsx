import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import CategoryCell from "../../components/CategoryCell";
import SeparatorView from "../../components/SeparatorView";
import { ProfileStackParamList } from '../../navigations/types';
import { startGetCategories } from '../../redux/actions/products';
import { AppState } from '../../redux/store/configureStore';
import { AppAction } from '../../redux/types/actions';
import { Category } from '../../redux/types/Expense';
import Header from '../header/Header';

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface CategoryProps {
  navigation: StackNavigationProp<ProfileStackParamList, 'Register'>;
  route: RouteProp<ProfileStackParamList, 'Register'>;
  categories: Category[]
}

type Props = CategoryProps & LinkDispatchProps & LinkStateProp;

class Categoryscreen extends Component<Props, any> {

  constructor(props: Props) {
    super(props);
    this.state = {

    };
    this.renderCell = this.renderCell.bind(this);
  }

  componentDidMount() {
    this.props.startGetCategories();
  }

  render() {
    const { container, content } = styles;
    const { categories } = this.props;
    console.log(categories);
    return (
      <View style={container}>
      <Header title="Expense" leftButtonPress={() => this.props.navigation.goBack()}></Header>
      {
        categories.map((exp: Category) => {
          return (
            <View style={content}>
              <View>
                  <Text>{exp.id}</Text>
                  <Text>{exp.name}</Text>
              </View>
            </View>
          );
        })
      }
    </View>
    );
  }

  renderCell = (item: Category) => (
    <CategoryCell onPress={this.onItemClick.bind(this, item)} item={item}/>
  );

  renderSeparator = () => (
    <SeparatorView/>
  );

  onRefresh() {
    this.props.startGetCategories();
  }

  onReload() {
    this.props.startGetCategories();
  }

  onItemClick(item: Category) {
    // this.props.navigation.navigate('ProductList', {category_id: item.id});
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
  categories: Category[]
}

interface LinkDispatchProps{
  startGetCategories: () => void;
}

const mapStateToProps = (state: AppState, props: CategoryProps): LinkStateProp => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: CategoryProps): LinkDispatchProps =>
({
  startGetCategories: bindActionCreators(startGetCategories, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Categoryscreen)