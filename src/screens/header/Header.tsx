import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface CompProps {
    title: string,
    leftButtonPress?: () => void,
    rightButtonPress?: () => void
}

const Header = (props: CompProps) => {
    return (
        <View style= { styles.container }>
            <View style= { styles.leftContainer }>
                <TouchableOpacity style={ styles.iconButton} onPress={props.leftButtonPress}>
                    <Icon name="ios-menu" size={24} />
                </TouchableOpacity>
            </View>
            <View style={ styles.midContainer}>
                <Text> "test" </Text>
            </View>
            <View style={styles.rightContainer}>
                {props.rightButtonPress ? (
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={props.rightButtonPress}
                    >
                        <Icon name="power" size={24} />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: colors.containerBg,
        borderBottomWidth: 1,
        // borderBottomColor: colors.borderColor
    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-start"
    },
    midContainer: {
        flex: 3,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: "700"
    },
    rightContainer: {
        flex: 1,
        alignItems: "flex-end"
    },
    iconButton: {
        paddingHorizontal: 16
    }
});

export default Header;