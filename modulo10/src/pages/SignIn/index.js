import React, { useRef, useState } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Background from '~/components/Background'

import { signInRequest } from '~/store/modules/auth/actions'

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
  const dispatch = useDispatch()

  const [email, setEmail] = useState('teste')
  const [password, setPassword] = useState('teste')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispatch(signInRequest(email, password))
  }

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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={passWordRef}
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SingUp')}>
          <SignText>Criar Conta Gratuita</SignText>
        </SignLink>
      </Container>
    </Background>
  )
}
