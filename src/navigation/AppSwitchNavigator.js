import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Welcome from '../components/WelcomeScreen';
import AppDrawerNavigator from './AppDrawerNavigator';

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: Welcome,
  },
  Dashboard: {
    screen: AppDrawerNavigator,
  },
}, {
  initialRouteName: 'Dashboard',
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default AppContainer
