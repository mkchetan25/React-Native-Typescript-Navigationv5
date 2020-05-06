import React, { Component } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";
import appStyles from "../common/Styles";
import SeparatorView from "./SeparatorView";

interface EditViewProps {
  editable: boolean;
  secureTextEntry?: boolean;
  autoCorrect: boolean;
  title: string;
  onChangeText: ((text: any) => void);
  text: string;
  keyboardType?: KeyboardTypeOptions;
}

class EditView extends Component<EditViewProps, any> {
    render() {
        let editable = true;
        if (this.props.editable !== undefined && !this.props.editable) {
            editable = false;
        }
        let secureTextEntry = false;
        if (this.props.secureTextEntry !== undefined && this.props.secureTextEntry) {
            secureTextEntry = true;
        }
        let autoCorrect = true;
        if (this.props.autoCorrect !== undefined && !this.props.autoCorrect) {
            autoCorrect = false;
        }
        return (
            <View style={styles.container}>
                <Text style={[appStyles.textDef, {textAlign: 'left', width: 100}]}>
                    {this.props.title}
                </Text>
                <View style={styles.editContainer}>
                    <TextInput
                        keyboardType={this.props.keyboardType}
                        autoCorrect={autoCorrect}
                        secureTextEntry={secureTextEntry}
                        // autoCompleteType={this.props.autoCompleteType}
                        editable={editable}
                        style={[appStyles.textTitle, {textAlign: 'left'}]}
                        onChangeText={this.props.onChangeText}>
                        {this.props.text}
                    </TextInput>
                    <SeparatorView style={{alignItems: 'center'}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    editContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

export default EditView;