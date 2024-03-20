import { StatusBar } from 'expo-status-bar';
import { View, Image, Platform } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

const EyeOpen = require('../assets/Shown.png')
const EyeClosed = require('../assets/Hidden.png')

const colors = {
  background: '#222222',
  primaryYellow: '#FFDE59',
}
export default function Login() {
  const [loginData, setLoginData] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  if (loginData) return (
    <>
      <StatusBar style="light" />
      <Container style={{justifyContent: 'space-between'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={{marginTop: 100, alignItems: 'center'}}>
          <Logo source={require('../assets/Cocteles.png')} style={{width: 100, height: 100}} />
          <Label style={{fontSize: 20, marginBottom: 20}}> Ingresa tus datos </Label>
        </View>

        <DataContainer>
          <Label>Correo electrónico</Label>
          <Input 
            value={userData.email}
            onChangeText={text => setUserData({...userData, email: text})}
          />

          <Label>Contraseña</Label>
          <InputContainer>
            <Input
              value={userData.password}
              onChangeText={text => setUserData({...userData, password: text})}
              secureTextEntry={!viewPassword}
            />
            <ViewPasswordButton onPress={() => setViewPassword(!viewPassword)}>
              <Image source={viewPassword ? EyeOpen : EyeClosed} style={{width: 22, height: 22, resizeMode: 'contain'}} />
            </ViewPasswordButton>
          </InputContainer>

          <Label style={{textAlign: 'center'}}>Olvidé mi contraseña</Label>
        </DataContainer>

        <Button onPress={() => setLoginData(false)} activeOpacity={0.5}>
          <ButtonText>Iniciar sesión</ButtonText>
        </Button>
      </Container>
    </>
  )

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Logo source={require('../assets/Cocteles.png')} style={{width: 230, height: 230}} />
        <Button onPress={() => setLoginData(true)} activeOpacity={0.5}>
          <ButtonText>Iniciar sesión</ButtonText>
        </Button>
      </Container>
    </>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${colors.primaryYellow};
  padding: 0px 10px;
  border-radius: 5px;
  margin-bottom: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 45px;
`;

const ButtonText = styled.Text`
  color: ${colors.background};
  font-size: 16px;
`;

const Logo = styled.Image`
  margin-bottom: 50px;
`;

const Input = styled.TextInput`
  background-color: white;
  padding: 10px 25px;
  border-radius: 20px;
  margin-bottom: 10px;
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-start;
  justify-content: center;
  height: 45px;
`;

const InputContainer = styled.View`
  width: 100%;
  position: relative;
`;

const ViewPasswordButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 12px;
`;

const DataContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-start;
  justify-content: center;
`;

const Label = styled.Text`
  color: white;
  margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
`;