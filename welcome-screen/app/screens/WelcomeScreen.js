import React from 'react';
import {ImageBackground, View, StyleSheet, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/color.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/air-jordan-logo.png')}></Image>
                <Text>Sell What You Don't Need</Text>
            </View>
           
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',   
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4', 
    },
    logo: {
        width:100,
        height:100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
});

export default WelcomeScreen;