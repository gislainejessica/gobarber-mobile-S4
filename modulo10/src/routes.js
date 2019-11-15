import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SingIn from './pages/SignIn'
import SingUp from './pages/SignUp'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

import Confirm from './pages/New/Confirm'
import SelectDateTime from './pages/New/SelectDateTime'
import SelectProvider from './pages/New/SelectProvider'

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
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20
                    }
                  }
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    size={20}
                    name="add-circle-outline"
                    color="rgba(255,255,255,0.6)"
                  />
                )
              }
            },
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
