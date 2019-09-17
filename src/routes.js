import React, { Component } from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Perfil from '~/pages/Perfil';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// Stack de login
const AuthStack = createStackNavigator({ SignIn: Login });

// Stack interno
const AppStack = createBottomTabNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Inicio',
            }
        },
        Perfil: Perfil,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = FontAwesome5;
                let iconName;
                if (routeName === 'Main') {
                    iconName = `home`;
                } else if (routeName === 'Perfil') {
                    iconName = `user-cog`;
                }

                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        },
    }
);


// Stack geral
const Routes = createAppContainer(createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Auth'
}
));

export default Routes;
