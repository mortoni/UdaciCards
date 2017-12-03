import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { cerulean, oxfordBlue, white } from './utils/colors';
import { Constants } from 'expo';
import { Root } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import { initStore } from './store';

import Deck from './views/Deck';
import Decks from './views/Decks';
import NewDeck from './views/NewDeck';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        this.store = null;
        this.unmountStore = () => {};
    }

    componentDidMount() {
        this.setState({ loading: false })
    }

    async componentWillMount() {
        const { store, unmountStore } = await initStore()
        this.store = store
        this.unmountStore = unmountStore
    }

    componentWillUnmount() {
        this.unmountStore()
    }

    render() {
        const { loading } = this.state

        return (
            <Provider store={this.store}>
                <View style={{flex: 1, backgroundColor: oxfordBlue}}>
                    <MyBar barStyle='light-content' />

                    <Root>
                        <StackNav />
                    </Root>
                </View>
            </Provider>
        )
    }
}

const MyBar = ({ ...props }) => (
    <View style={{backgroundColor: cerulean, height: Constants.statusBarHeight + 10 }}>
        <StatusBar translucent { ...props } />
    </View>
)

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
        }
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

const StackNav = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
          title: 'UdaciCards',
          headerTintColor: white,
          headerStyle: {
            backgroundColor: oxfordBlue,
          },
        }
    },
    Deck: {
        screen: Deck,
    }
})

export default App
