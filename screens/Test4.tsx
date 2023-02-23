import React, { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export const MultiplyExample = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const multiply = () => {
        setResult(num1 * num2);
    };

    return (
        <View>
            <Text>Enter two numbers to multiply:</Text>
            <TextInput
                placeholder="Enter first number"
                onChangeText={(text) => setNum1(Number(text))}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Enter second number"
                onChangeText={(text) => setNum2(Number(text))}
                keyboardType="numeric"
            />
            <Button title="Multiply" onPress={multiply} />
            <Text>The result of {num1} * {num2} is {result}</Text>
        </View>
    );
};

export default MultiplyExample;
