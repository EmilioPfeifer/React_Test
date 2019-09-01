import { createDrawerNavigator } from 'react-navigation'
import DashboardStackNavigator from './DashboardStackNavigator'

const AppDrawerNavigator = createDrawerNavigator({
  Mapas: {
    screen: DashboardStackNavigator,
  },
})

export default AppDrawerNavigator