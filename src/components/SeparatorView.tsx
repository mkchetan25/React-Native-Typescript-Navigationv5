import React, { Component } from "react";
import { View } from "react-native";
import * as Theme from "../common/Theme.json";

interface ViewProps {
    style?: any
}

class SeparatorView extends Component<ViewProps, any> {

    render = () => (
        <View style={[{height: 1, width: "100%", backgroundColor: Theme.secondaryColor}, this.props.style]}/>
    )
}

export default SeparatorView;