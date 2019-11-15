import React, { useEffect, useState } from 'react'
import Background from '~/components/Background'
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '~/services/api'
import { Container, Title, List } from './styles'
import Agendamento from '~/components/Agendamento'

// const data = [1, 2, 3, 4, 5]

export default function Dashboard() {
  const [appointments, setAppointments] = useState()

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('agendamentos')
      setAppointments(response.data)
    }
    loadAppointments()
  }, [])

  async function handleCancel(id) {
    const response = await api.delete(`agendamentos/${id}`)
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at
            }
          : appointment
      )
    )
  }

  return (
    <Background>
      <Container>
        <Title> Agendamentos </Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Agendamento
              onCancel={() => {
                handleCancel(item.id)
              }}
              data={item}
            />
          )}
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
