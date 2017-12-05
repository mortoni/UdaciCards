import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
    return (
        <View style={ {flex:1} }>{ props.children }</View>
    )
}

export default Container
