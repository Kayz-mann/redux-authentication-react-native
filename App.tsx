import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Login from './src/screens/Login'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/Home' 

const switchNavigator = createSwitchNavigator({
    loginStack: {
      screen: createStackNavigator(
        {
          Login: Login,
          Home: Home,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
    },
})

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation>
         <Login />
      </AppNavigation>
    </Provider>
  );
}

