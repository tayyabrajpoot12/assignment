import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { TextInput } from 'react-native-paper';

export default function Footer() {

    const [text, setText] = React.useState("");

    return (
        // <ScrollView>
        <View style={styles.container}>
            <View style={styles.instructionBox}>
                <Text style={styles.instructionBoxTxt}>Special instructions</Text>
                <TextInput
                    value={text}
                    placeholder='Instruction text...'
                    onChangeText={text => setText(text)}
                    style={{
                        backgroundColor: '#170633',
                        borderWidth: 1,
                    }}
                />

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Post</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.btn1Txt}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btn2Txt}>Add to Tab</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative',
        top:-30
    },

    instructionBoxTxt: {
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },

    btn1: {
        // width: 50,
        position: 'absolute',
        top: 10,
        left: 10
    },

    btn1Txt: {
        color: '#423759',
        borderBottomColor: '#423759',
        borderBottomWidth: 1,
    },

    btn: {
        height: 40,
        backgroundColor: '#423759',
        marginLeft: 200,
        marginTop: 10,
        borderRadius: 10,
        width: 100,
        marginBottom: 40,
    },


    btnTxt: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 9,
    },

    instructionBox: {
        width: 300,
    },

    btn2: {
        height: 40,
        width: 130,
        backgroundColor: '#816AF8',
        borderRadius: 10,
        position:'relative',
        left:120
    },
    btn2Txt: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 9,
    },
})