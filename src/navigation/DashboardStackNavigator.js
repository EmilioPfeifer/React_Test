import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation'
import DashboardTabNavigator from './DashboardTabNavigator'


const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: {
    screen: DashboardTabNavigator,
  }
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
      )
    };
  }
})

export default DashboardStackNavigator
