import React from 'react'
import { TouchableOpacity } from 'react-native'
import Background from '~/components/Background'

import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles'

export default function SelectDateTime() {
  return <Background />
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o Horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  )
})
