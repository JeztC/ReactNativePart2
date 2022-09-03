import {View, StyleSheet, Pressable, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Text from "./Text";
import theme from "../theme";
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    backGroundContainer: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
        paddingBottom: 15,
        paddingLeft: 15,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        alignItems: 'flex-end',
        alignContent: 'center',
        flexGrow: 1,
        paddingRight: 5,
    },
    flexItemA: {
        flex: 0,
        color: 'white',
        fontWeight: theme.fontWeights.bold,
    },
});

const AppBar = () => {
    return <View style={styles.backGroundContainer}>{
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.container}>
                <Pressable>
                    <Link to="/" style={styles.flexItemA}>
                        <Text style={styles.flexItemA}>Repositories</Text>
                    </Link>
                </Pressable>
                <Pressable>
                    <Link to="/signin" style={styles.flexItemA}>
                        <Text style={styles.flexItemA}>Sign in</Text>
                    </Link>
                </Pressable>
            </ScrollView>
        </View>
    }</View>;
};

export default AppBar;