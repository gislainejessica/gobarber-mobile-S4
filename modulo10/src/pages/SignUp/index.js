import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'react-native'
import Background from '~/components/Background'

import { signUpRequest } from '~/store/modules/auth/actions'

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
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password))
  }

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
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar Conta
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SingIn')}>
          <SignText>Já tenho conta</SignText>
        </SignLink>
      </Container>
    </Background>
  )
}
