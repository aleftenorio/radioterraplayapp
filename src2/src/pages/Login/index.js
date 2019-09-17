import React from 'react';

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Card,
  CardItem,
  Item as FormItem,
  Input,
  Content,
  Label,
  Title,
  Thumbnail
} from 'native-base';

import { View, Image, ImageBackground } from 'react-native';


class Login extends React.Component {

  static navigationOptions = {
    title: 'Por favor digite o login',
  };

  render() {
    return (

      <ImageBackground
        source={require('../../assets/images/background_login.jpg')}
        style={{
          //alignItems: 'center',
          flex: 1,
          paddingHorizontal: 20,
        }}
        resizeMode="cover"
      >
        <Container transparent style={{ paddingTop: 10, backgroundColor:'rgba(255,255,255,0.8)' }}>

          <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>

            <Card transparent style={{ alignItems: 'center' }}>
              <CardItem>
                <View>
                  <Image
                    source={require('../../assets/images/icon.png')}
                  />
                </View>
              </CardItem>
            </Card>

            <Form>
              <Card transparent>
                <CardItem>
                  <Body>
                    <FormItem floatingLabel style={{ marginBottom: 10 }}>
                      <Label>E-mail</Label>
                      <Input />
                    </FormItem>
                    <FormItem floatingLabel style={{ marginBottom: 10 }}>
                      <Label>Password</Label>
                      <Input secureTextEntry={true} />
                    </FormItem>
                  </Body>
                </CardItem>
              </Card>
              <Button onPress={() => { this.props.navigation.navigate('Main') }} success style={{ margin: 15, justifyContent: 'center' }}>
                <Text> Entrar </Text>
              </Button>

              <Text style={{ marginLeft: 10 }} onPress={() => alert("Esquece minha senha!")}> Esqueceu sua senha?</Text>

              <Button light style={{ margin: 15, justifyContent: 'center', marginTop: 50 }}><Text> Criar Nova Conta </Text></Button>
            </Form>

          </Content>
        </Container>

      </ImageBackground>
    );
  }

  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
}

export default Login;