import React from 'react'
import Background from '~/components/Background'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Title, List } from './styles'
import Agendamento from '~/components/Agendamento'

const data = [1, 2, 3, 4, 5]

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title> Agendamentos </Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Agendamento data={item} />}
        />
      </Container>
    </Background>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  )
}
