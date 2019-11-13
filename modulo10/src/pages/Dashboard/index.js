import React from 'react'
import { View } from 'react-native'
import Background from '~/components/Background'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Dashboard() {
  return <Background />
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  )
}
