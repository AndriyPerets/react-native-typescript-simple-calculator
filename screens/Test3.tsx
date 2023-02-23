import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, View,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Test3 = ({navigation, route}: any) => {
    const onButtonPress = async () => {
        // const toSave = 'TEST';
        // await AsyncStorage.setItem('MY_CONSTANT', toSave);
        const myConstantFromMemory = await AsyncStorage.getItem('MY_CONSTANT');
        // await AsyncStorage.setItem('NEW_MY_CONSTANT', 'TESTKHGAKJHSKJAHS');
        await AsyncStorage.removeItem('NEW_MY_CONSTANT');
        await AsyncStorage.clear()
        const newMyConstantFromMemory = await AsyncStorage.getItem(
            'NEW_MY_CONSTANT',
        );
        console.log('myConstantFromMemory: ', myConstantFromMemory);
        console.log('newMyConstantFromMemory: ', newMyConstantFromMemory);
    };

    return (
        <View style={styles.container}>
            {/*<TheText>STATE</TheText>*/}
            <Button onPress={onButtonPress} title={'AWAIT TEST'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Test3;