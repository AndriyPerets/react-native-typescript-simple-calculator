import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, View,} from 'react-native';

const Test2 = ({ navigation, route }: any) => {
    const onButtonPress = async () => {
        console.log('HERE1');
        const myPromise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('result 1 of the promise');
            }, 1000);
        });
        const myPromise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('result 2 of the promise');
            }, 2000);
        });
        const myPromise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('result 3 of the promise');
            }, 3000);
        });
        // myPromise1.then(res1 => {
        //   console.log('RES1: ', res1);
        //   myPromise2.then(res2 => {
        //     console.log('RES2: ', res2);
        //     myPromise3.then(res3 => {
        //       console.log('RES3: ', res3);
        //       console.log('WE ARE HERE!!');
        //     });
        //   });
        // });
        // console.log('HERE4')

        const res1 = await myPromise1;
        console.log('RES1: ', res1);
        const res2 = await myPromise2;
        console.log('RES2: ', res2);
        const res3 = await myPromise3;
        console.log('RES3: ', res3);
        console.log('WE ARE HERE!!');
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

export default Test2;