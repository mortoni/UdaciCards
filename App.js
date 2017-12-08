import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { cerulean, oxfordBlue } from './utils/colors'
import { Constants, AppLoading } from 'expo'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import { initStore } from './store'
import { setNotification } from './utils'
import Tabs from './components/Tabs'
import StackNav from './components/StackNav'

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

export default App
