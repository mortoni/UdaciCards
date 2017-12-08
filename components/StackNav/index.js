import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';
import { oxfordBlue, white } from '../../utils/colors';
import { Image } from 'react-native';
import Deck from '../../views/Deck';
import NewDeck from '../../views/NewDeck';
import NewQuestion from '../../views/NewQuestion';
import Quiz from '../../views/Quiz';
import Tabs from '../Tabs'

const StackNav = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: <Image source={require('../../assets/udacity.png')} style={{width: 50, height:50}}/>,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: oxfordBlue,
            },
        }
    },
    Deck: {
        screen: Deck,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.deck.title,
            headerTintColor: white,
            headerStyle: {
                backgroundColor: oxfordBlue,
            },
        })
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: oxfordBlue,
            },
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: oxfordBlue,
            },
        }
    },
})

export default StackNav
