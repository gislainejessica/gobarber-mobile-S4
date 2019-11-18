import React, { useState, useMemo } from 'react'
import { DatePickerIOS } from 'react-native'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { Container, DateButton, DateText, Picker } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function DateInput({ date, onChange }) {
  const [opened, setOpend] = useState(false)
  const dateFormatted = useMemo(
    () => format("dd 'de' MMM 'de' YYYY", { locale: pt }),
    []
  )
  return (
    <Container>
      <DateButton onPress={() => setOpend(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  )
}
