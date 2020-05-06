import React, { Component } from "react";
import ReactNative, { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import appStyles from "../common/Styles";
import * as Theme from "../common/Theme.json";
import { Category } from "../redux/types/Expense";
import Utils from "../utils/Utils";

const {CachedImage} = require('react-native-cached-image');

interface Props {
    item: Category;
    onPress: () => void;
}

class CategoryCell extends Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    shouldComponentUpdate = (nextProps: Props) => (
        this.props.item.id !== nextProps.item.id
    );

    render() {
        const {item} = this.props;
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                underlayColor='transparent'>
                <View style={styles.cell}>
                    <View style={{flexDirection: 'row'}}>
                        <CachedImage
                            source={{uri: item.image != null ? item.image.src : ""}}
                            activityIndicatorProps={{"size": "large", "color": Theme.primaryColor}}
                            defaultSource={loadingImg}
                            fallbackSource={loadingImg}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>
                            <Text
                                style={[appStyles.textTitle, {textAlign: 'auto'}]}>{Utils.replaceHTML(item.name)}</Text>
                            <Text
                                style={[appStyles.textDef, {textAlign: 'auto'}]}>{item.count + " " + "Products"}</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Image style={[
                                {justifyContent: 'center'},
                                ReactNative.I18nManager.isRTL ? {transform: [{rotate: '180deg'}]} : {}
                            ]} source={require('../assets/ic_arrow.png')}/>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const loadingImg = require('../assets/ic_def_img.png');

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 12
    },
    image: {
        width: 56,
        height: 56,
        resizeMode: 'cover',
        borderRadius: 18,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12
    },
});

export default CategoryCell;