import React, { useEffect } from 'react';
//import { AsyncStorage } from '@react-native-community/async-storage';
import { AppLoading } from 'expo';


//AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from @react-native-community/async-storage instead of 'react-native'.



import SampleData from '../sample'

//1 - LOADING SCREEN
export default function LoadingScreen(props) {

    useEffect(() => checkLocalData(), []);

    function checkLocalData() {
        props.navigation.navigate('App'); //Navigate to the home page

        //Check if LocalStorage has been populated with the sample data
        /*
                AsyncStorage.getItem('quotes', (err, data) => {
                    //if it doesn't exist, extract from json fil
                    if (data === null) {
                        AsyncStorage.setItem('quotes', JSON.stringify(SampleData.quotes));//save the initial data in Async
        
                        
                    } else {
                        props.navigation.navigate('App'); //Navigate to the home page
                    }
                });
        
                */
    }

    return <AppLoading />;
}