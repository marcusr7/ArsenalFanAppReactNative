import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const EnterButton = (props:any) =>{
    return(
        <TouchableOpacity style={styles.buttonBody} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBody : {
        backgroundColor: '#ff0000',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },

    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    }
});

export {EnterButton};