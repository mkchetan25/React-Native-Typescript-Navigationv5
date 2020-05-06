import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import appStyles from "../common/Styles";

interface RegisterProps {
    source: string;
    text: string;
}

export default class EmptyView extends React.Component<RegisterProps, any> {

    render = () => (
        <View style={appStyles.container}>
            <View>
                <Image
                    source={{ uri: this.props.source }}
                    resizeMode={"contain"}
                    style={styles.image}
                />
                {/* <Image style={styles.image} defaultSource={{uri: this.props.source}}/> */}
                <Text style={appStyles.textTitle}>{this.props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 144,
        height: 144,
        margin: 16,
        resizeMode: 'contain',
    },
});
