import React, { useRef } from 'react'
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

export default function SignIn({ navigation }) {
  const passWordRef = useRef()

  function handleSubmit() {}
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passWordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={passWordRef}
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}> Acessar </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SingUp')}>
          <SignText>Criar Conta Gratuita</SignText>
        </SignLink>
      </Container>
    </Background>
  )
}
