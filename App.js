import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { cerulean, oxfordBlue, white } from './utils/colors';
import { Constants, AppLoading } from 'expo';
import { Root } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { initStore } from './store';
import { setNotification } from './utils';

import Deck from './views/Deck';
import Decks from './views/Decks';
import NewDeck from './views/NewDeck';
import NewQuestion from './views/NewQuestion';
import Quiz from './views/Quiz';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null
        }
        this.store = null;
        this.unmountStore = () => {};
    }

    componentDidMount() {
        setNotification();
    }

    async componentWillMount() {
        try {
            const { store, unmountStore } = await initStore()
            this.store = store
            this.unmountStore = unmountStore
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ error: e.message });
        }
    }

    componentWillUnmount() {
        this.unmountStore()
    }

    render() {
        const { loading, error } = this.state
        const store = this.store

        return (
            error ?
            <Text>error</Text> :
                loading ?
                <AppLoading /> :
                <Provider store={ store }>
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

const StackNav = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: <Image source={require('./assets/udacity.png')} style={{width: 50, height:50}}/>,
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

export default App
