import React from 'react';
import Splash from './app/screens/splash';
import SingUp from './app/screens/auth/sign-up';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SingIn from './app/screens/auth/sign-in';
import Home from './app/screens/tabs/home';
import Tabs from './app/screens/tabs';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SingIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function App(): React.JSX.Element {
  return (
    <MyStack />
    // <Splash/>
  );
}

export default App;
