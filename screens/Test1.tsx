import React, { useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View,} from 'react-native';


export const Test1 = ({navigation, route}: any) => {
    const [count, setCount] = useState<number>(1);
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        console.log('showButton: ', showButton);
        if (showButton) {
            setCount(2);
        }
    }, [showButton]);

    useEffect(() => {
        console.log('initialization');
    }, []);

    return (
        <View style={styles.container}>
            <Text>STATE: {count}</Text>
            <Button onPress={() => setShowButton(true)} title={'SHOW'} />
            {count === 2 && (
                <Button onPress={() => setCount(2)} title={'add'} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Test1;