import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { create, all } from 'mathjs';

const math = create(all);

const Calculadora = () => {

    const [resultado, setResultado] = useState('');

    const handleButtonPress = (value) => {
        setResultado(resultado + value);
    };

    const calcularResultado = () => {
        try {
            const evaluatedResult = math.evaluate(resultado);
            setResultado(evaluatedResult.toString());

        } catch (error) {
            resultado(error);
        }
    };

    const limpiarResultado = () => {
        setResultado('');
    };

    return (
        <View style={style.container}>
            <View style={style.resultcontainer}>
                <Text style={style.resultText}> {resultado}</Text>
            </View >
            <View style={style.buttonContainer}>
                <View style={style.row}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('7')}
                    >
                        <Text style={style.buttonText}> 7 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('8')}
                    >
                        <Text style={style.buttonText}> 8 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('9')}
                    >
                        <Text style={style.buttonText}> 9 </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.row}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('4')}
                    >
                        <Text style={style.buttonText}> 4 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('5')}
                    >
                        <Text style={style.buttonText}> 5 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('6')}
                    >
                        <Text style={style.buttonText}> 6 </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.row}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('1')}
                    >
                        <Text style={style.buttonText}> 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('2')}
                    >
                        <Text style={style.buttonText}> 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('3')}
                    >
                        <Text style={style.buttonText}> 3 </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.row}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('0')}
                    >
                        <Text style={style.buttonText}> 0 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('.')}
                    >
                        <Text style={style.buttonText}> . </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={calcularResultado}
                    >
                        <Text style={style.buttonText}> = </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.row}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress(' +')}
                    >
                        <Text style={style.buttonText}> + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('-')}
                    >
                        <Text style={style.buttonText}> - </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('*')}
                    >
                        <Text style={style.buttonText}> * </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.row}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => handleButtonPress('/')}
                    >
                        <Text style={style.buttonText}> / </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.button}
                        onPress={limpiarResultado}
                    >
                        <Text style={style.buttonText}> C </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )

}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultcontainer: {
        marginBottom: 20,
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: 300,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 4
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

});

export default Calculadora;
