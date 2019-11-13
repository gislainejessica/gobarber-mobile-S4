import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SingIn from './pages/SignIn'
import SingUp from './pages/SignUp'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: createSwitchNavigator({
          SingIn,
          SingUp
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#8d41a8'
              }
            }
          }
        )
      },
      {
        initialRouteName: signedIn ? 'App' : 'Login'
      }
    )
  )
