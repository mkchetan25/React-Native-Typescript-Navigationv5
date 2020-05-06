import {StyleSheet} from "react-native";
import {
    defTextSize,
    mainBGColor,
    primaryColor,
    secondaryColor,
    subTitleTextSize,
    textTextColor,
    titleTextColor,
    titleTextSize
} from "./Theme";

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainBGColor
    },
    headerContainer: {
        backgroundColor: primaryColor,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 44,
        height: 120,
        position: 'absolute',
        alignItems: 'center',
        top: 0,
        right: 0,
        left: 0,
    },
    textButton: {
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingEnd: 20,
        paddingStart: 20,
        color: primaryColor,
        borderColor: primaryColor,
        borderRadius: 16,
        borderWidth: 1,
        fontSize: defTextSize,
        backgroundColor: mainBGColor
    },
    textButtonActive: {
        color: mainBGColor,
        backgroundColor: primaryColor,
        overflow: 'hidden',
    },
    textButtonInactive: {
        color: secondaryColor,
        borderColor: secondaryColor,
        backgroundColor: mainBGColor
    },
    textTitle: {
        textAlign: 'center',
        color: titleTextColor,
        fontSize: titleTextSize,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    textSubTitle: {
        textAlign: 'center',
        color: titleTextColor,
        fontSize: subTitleTextSize,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    textDef: {
        textAlign: 'center',
        color: textTextColor,
        fontSize: defTextSize,
        fontWeight: 'normal',
        fontStyle: 'normal',
    }
});

export default appStyles;
