import React from 'react'
import { Image } from 'react-native'
import Background from '~/components/Background'

import logo from '~/assets/logo.png'
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText
} from './styles'

export default function SingUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}> Acessar </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SingUp')}>
          <SignText>Criar Conta Gratuita</SignText>
        </SignLink>
      </Container>
    </Background>
  )
}
