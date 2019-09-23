import React from 'react';

import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

import {
  View, StyleSheet, Dimensions, StatusBar, Platform
} from 'react-native';

import { WebView } from 'react-native-webview';


const dimension_height = Dimensions.get('window').height;
const dimension_width = Dimensions.get('window').width;

const deviceios = Platform.OS === 'ios' ? true : false

const styles = StyleSheet.create({
  welcome: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },
  playerRadio: {
    width: '100%',
    //height: 100,
    flex: 1,
    backgroundColor: '#F0F0F0',
    //position: 'absolute',
    bottom: 0
  },
  textTitle: {
    fontSize: 40,
    color: '#C0C0C0',
    textAlign: 'center'
  }
});


export default class Main extends React.Component {

  state = {
    tittle: "Tela Home!!"
  }

  async componentDidMount() {

  }

  render() {
    return (
      <Container>

        <StatusBar backgroundColor="green" />
        {/* <Header /> */}
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <Card transparent>
            <CardItem>
              <Body>


                <Text style={styles.textTitle}>
                  Aperte o play para ouvir a melhor rádio do Brasil!
                </Text>

              </Body>
            </CardItem>
          </Card>
        </Content>

            <WebView
              source={{ uri: 'https://d1uzdx1j6g4d0a.cloudfront.net/players/topo/15/92036/' }}
              style={styles.playerRadio}
            />

      </Container>
    )
  }

}

