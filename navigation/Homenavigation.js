import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import ReadNews from '../components/ReadNews'

const stack = createStackNavigator()

export default function Homenavigation() {

  return (
    <stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='readNews' component={ReadNews}/>
    </stack.Navigator>
  )
}

