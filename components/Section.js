import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper';
import fanta from '../images/fanta.png';
import coca from '../images/coca.png';
import sprite from '../images/sprite.png';
import water from '../images/water.png';
import spoon from '../images/spoon.png';


export default function Section() {


    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);


    return (


        <View style={styles.container}>
            <Text style={styles.txt}>Quantity:</Text>
            <Text style={styles.price}>Price:</Text>
            <TouchableOpacity><Text style={styles.addTxt}>-</Text></TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity><Text style={styles.subTxt}>+</Text></TouchableOpacity>
            <Text style={styles.rupees}>$ 48</Text>

            <View style={styles.chooserBox}>
                <Text style={styles.add_one}>Add-ons:</Text>

                <View style={styles.Checkboxes}>
                    <View style={{ padding: 3 }}>
                        <Checkbox
                            color='purple'
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Image style={styles.img1} source={fanta} />
                        <Text style={styles.name}>Fanta</Text>
                    </View>
                    <View style={{ padding: 3 }}>
                        <Checkbox
                            color='purple'
                            status={checked1 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked1(!checked1);
                            }}
                        />
                        <Image style={styles.img} source={coca} />
                        <Text style={styles.name}>Cola</Text>
                    </View>
                    <View style={{ padding: 3 }}>
                        <Checkbox
                            color='purple'
                            status={checked2 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked2(!checked2);
                            }}
                        />
                        <Image style={styles.img} source={sprite} />
                        <Text style={styles.name}>Sprite</Text>
                    </View>
                    <View style={{ padding: 3 }}>
                        <Checkbox
                            color='purple'
                            status={checked4 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked4(!checked4);
                            }}
                        />
                        <Image style={styles.img2} source={water} />
                        <Text style={styles.name}>Water</Text>
                        <Image style={styles.spoon} source={spoon} />
                    </View>
                    <View style={{ padding: 3, position: 'relative', left: -5 }}>
                        <Checkbox
                            color='purple'
                            status={checked3 ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked3(!checked3);
                            }}
                        />
                        <Image style={styles.img} source={coca} />
                        <Text style={styles.name}>Cola</Text>
                    </View>

                </View>

            </View>



        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',

    },
    txt: {
        color: '#fff',
        fontStyle: 'italic',
        position: 'absolute',
        left: -153
    },
    rupees: {
        color: '#fff',
        position: 'absolute',
        left: 122,
        top: 28
    },
    price: {
        color: '#fff',
        fontStyle: 'italic',
        position: 'absolute',
        left: -153,
        top: 25
    },
    quantity: {
        color: '#fff',
        left: 130,
        top: 5,
    },
    subTxt: {
        color: '#fff',
        position: 'absolute',
        left: 105,
        top: -15,
        fontSize: 15,
        fontWeight: 'bold',
        left: 145
    },
    addTxt: {
        color: '#fff',
        position: 'absolute',
        left: 105,
        top: 3,
        fontSize: 15,
        fontWeight: 'bold',
        left: 112
    },
    chooserBox: {
        position: 'absolute',
        top: 55,
    },
    add_one: {
        color: '#fff',
        position: 'absolute',
        left: -153,
    },
    Checkboxes: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        top: 15,
        left: -160,
    },
    img: {
        position: 'relative',
        left: -15,
        width: 70,
        height: 70
    },
    img1: {
        position: 'relative',
        left: -10
    },
    name: {
        color: '#fff',
        fontWeight: 'bold'
    },
    img2:{
        position:'relative',
        left:-20,
        width:70,
        height:70
    },
    spoon: {
        position: 'relative',
        top: -50,
        left: 1,
        width: 70,
        height: 70
    }
})