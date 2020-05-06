import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import appStyles from "../../common/Styles";
import CategoryCell from "../../components/CategoryCell";
import EmptyView from "../../components/EmptyView";
import SeparatorView from "../../components/SeparatorView";
import { ProfileStackParamList } from '../../navigations/types';
import { Category, ProductType } from '../../redux/types/Expense';

// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface ProductTypeProps {
  navigation: StackNavigationProp<ProfileStackParamList, 'Register'>;
  route: RouteProp<ProfileStackParamList, 'Register'>;
  productTypes: ProductType[]
}

type Props = ProductTypeProps & LinkDispatchProps & LinkStateProp;

class ProductTypescreen extends Component<Props, any> {

  constructor(props: Props) {
    super(props);
    this.state = {

    };
    this.renderCell = this.renderCell.bind(this);
  }

  render() {
    const { productTypes } = this.props;
    console.log(productTypes);
    return (
      productTypes.length === 0 ?
            <EmptyView source={require('../../assets/ic_no_products.png')} text="List is empty"/> :
            <View style={appStyles.container}>
                <FlatList
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}
                    refreshControl={
                        <RefreshControl
                            refreshing={true}
                            onRefresh={this.onRefresh.bind(this)}
                        />}
                    data={productTypes}
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
    this.props.startGetProductTypes();
  }

  onReload() {
    this.props.startGetProductTypes();
  }

  onItemClick(item: Category) {
    // this.props.navigation.navigate('ProductList', {category_id: item.id});
  }
}

interface LinkStateProp{
  productTypes: ProductType[]
}

interface LinkDispatchProps{
  startGetProductTypes: () => void;
}

// const mapStateToProps = (state: AppState, props: ProductTypeProps): LinkStateProp => ({
//   productTypes: state.productTypes
// });

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppAction>, props: ProductTypeProps): LinkDispatchProps =>
// ({
//   startGetProductTypes: bindActionCreators(startGetProductTypes, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProductTypescreen)
export default ProductTypescreen;