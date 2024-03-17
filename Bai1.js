import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Bai1 = () => {

    const [Move, setMove] = useState(false);

    const position = useRef(new Animated.ValueXY()).current  
    const windowHeigth = Dimensions.get('window').height 

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        const randomY = Math.floor(Math.random() * windowHeigth) 
        Animated.timing(position, {
            toValue: { x: 0, y: randomY },
            duration: 3000, 
            useNativeDriver: false
        }).start(() => startAnimation());
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setMove(!Move) }}
                style={[styles.btn, { backgroundColor: Move ? 'black' : 'blue' }]}>
                {Move
                    ? <Text style={{ color: 'white', fontSize: 16 }}>Stop</Text>
                    : <Text style={{ color: 'white', fontSize: 16 }}>Move</Text>}
            </TouchableOpacity>

            {Move
                ? <Animated.View style={[styles.box, position.getLayout()]} />
                : <Animated.View style={[styles.box]} />}
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        padding: 30,
        borderRadius: 25,
        backgroundColor: 'black'
    },
    btn: {
        padding: 10,
        marginVertical: 12,
        borderRadius: 13,
        marginTop:25,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center'
    }
})