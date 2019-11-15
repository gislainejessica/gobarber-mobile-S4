import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import { parseISO, formatRelative } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Info, Name, Time, Avatar } from './styles'
// ${data.provider.name}
export default function Agendamento({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true
    })
  }, [data.date])

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? `https://api.adorable.io/avatars/50/abott@adorable.pngCopy` // data.provider.avatar.url
              : `https://api.adorable.io/avatars/50/abott@adorable.pngCopy`
          }}
        />
        <Info>
          <Name> {data.provider.name} </Name>
          <Time> {dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  )
}
