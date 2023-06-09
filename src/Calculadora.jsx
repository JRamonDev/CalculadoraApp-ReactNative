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

    const calculadoraResultado = () => {
        try {
            const evaluatedResult = math.evaluate(resultado);
            setResultado(evaluatedResult.toString());

        } catch (error) {
            resultado(error);

        }

    };




}
export default Calculadora;
