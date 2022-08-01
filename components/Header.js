import React, { useState } from 'react';

import { View, StyleSheet, Image, Text } from 'react-native'
import bottle from '../images/bottle.png';
import label from '../images/label.png';
import tag from '../images/small.png';
import { Checkbox } from 'react-native-paper';



export default function Header() {

    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);



    return (

        <View style={styles.container}>
            <Text style={styles.txt}>Red Label</Text>
            <View>
                <Image style={styles.bottle} source={bottle} />
                <Image style={styles.label} source={label} />
                <Image style={styles.tag} source={tag} />
            </View>

            <View style={styles.chkBox}>
                <Checkbox
                    color='purple'
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.singleTxt}>Single Shot</Text>
                <Checkbox
                    color='purple'
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked1(!checked1);
                    }}
                />
                <Text style={styles.doubleTxt}>Double Shot (additional charge)</Text>
            </View>


        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bottle: {
        width: 120,
        height: 120,
        marginTop: 10,
        marginLeft: 12
    },
    label: {
        width: 130,
        marginTop: -35,
        marginLeft: 5
    },
    tag: {
        marginLeft: 98,
        marginTop: -45,
        zIndex: -1,
    },
    chkBox: {
        marginLeft: -100,
        marginTop: 5
    },
    singleTxt: {
        color: '#fff',
        position: 'absolute',
        top: 7,
        left: 40
    },
    doubleTxt: {
        color: '#fff',
        position: 'absolute',
        top: 44,
        left: 40
    }


})