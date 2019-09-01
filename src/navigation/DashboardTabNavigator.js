import * as React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import LugaresFrecuentados from '../components/LugaresFrecuentados'
import RutasFavoritas from '../components/RutasFavoritas'
import Transporte from '../components/Transporte'

const DashboardTabNavigator = createMaterialBottomTabNavigator({
  LugaresFrecuentados: {
    screen: LugaresFrecuentados,
    navigationOptions: {
      tabBarLabel: 'Lugares',
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-map" size={24} color={tintColor}/>
      )
    }
  },
  RutasFavoritas: {
    screen: RutasFavoritas,
    navigationOptions: {
      tabBarLabel: 'Rutas',
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-information" size={24} color={tintColor}/>
      )
    }
  },
  Transporte: {
    screen: Transporte,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-bus" size={24} color={tintColor}/>
      )
    }
  }
},{
  initialRouteName: 'RutasFavoritas',
  activeColor: '#000000',
  barStyle: {
    backgroundColor: '#fff'
  }
})

export default DashboardTabNavigator;
