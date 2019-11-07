import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import SingIn from './pages/SignIn'
import SingUp from './pages/SignUp'

export default createAppContainer(
  createSwitchNavigator({
    SingIn,
    SingUp
  })
)
