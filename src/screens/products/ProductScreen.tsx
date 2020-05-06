import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import appStyles from "../../common/Styles";
import CategoryCell from "../../components/CategoryCell";
import EmptyView from "../../components/EmptyView";
import SeparatorView from "../../components/SeparatorView";
import { ProfileStackParamList } from '../../navigations/types';
import { Category, Product } from '../../redux/types/Expense';

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface ProductListProps {
  navigation: StackNavigationProp<ProfileStackParamList, 'Register'>;
  route: RouteProp<ProfileStackParamList, 'Register'>;
  products: Product[]
}

type Props = ProductListProps & LinkStateProp & LinkDispatchProps;

class ProductListscreen extends Component<Props, any> {

  constructor(props: Props) {
    super(props);
    this.state = {

    };
    this.renderCell = this.renderCell.bind(this);
  }

  render() {
    const { products } = this.props;
    return (
      products.length === 0 ?
            <EmptyView source={require('../../assets/ic_no_products.png')} text="List is empty"/> :
            <View style={appStyles.container}>
                <FlatList
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}
                    refreshControl={
                        <RefreshControl
                            refreshing={true}
                            onRefresh={this.onRefresh.bind(this)}
                        />}
                    data={products}
                    keyExtractor={item => `key-${item.id}`}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={({item}) =>
                        <CategoryCell onPress={this.onItemClick.bind(this, item)} item={item}/>
                    }/>
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
    // this.props.startGetProducts();
  }

  onReload() {
    // this.props.startGetProducts();
  }

  onItemClick(item: Category) {
    // this.props.navigation.navigate('ProductList', {category_id: item.id});
  }
}

interface LinkStateProp{
  products: Product[]
}

interface LinkDispatchProps{
  startGetProducts: () => void;
}

// const mapStateToProps = (state: AppState, props: ProductListProps): LinkStateProp => ({
//   products: state.products
// });

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: ProductListProps): LinkDispatchProps =>
// ({
//   startGetProducts: bindActionCreators(startGetProducts, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProductListscreen)
export default ProductListscreen;