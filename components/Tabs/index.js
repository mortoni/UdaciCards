import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import { oxfordBlue, white } from '../../utils/colors';
import Decks from '../../views/Decks';
import NewDeck from '../../views/NewDeck';

const Tabs = TabNavigator(
    {
        Decks: {
            screen: Decks,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: () => <FontAwesome name="bars" size={40} color={oxfordBlue} />
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: () => <FontAwesome name="plus-square" size={40} color={oxfordBlue} />
            }
        },
    }, {
        tabBarOptions: {
            activeTintColor: oxfordBlue,
            style: {
                height: 60,
                backgroundColor: white,
            }
        }
    }
)

export default Tabs
