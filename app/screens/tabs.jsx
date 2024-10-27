import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/home';
import {Image} from 'react-native';
import {created, home, profile, saved} from '../assets/images';
import Profile from './tabs/profile';
import Create from './tabs/create';

const Tab = createBottomTabNavigator();

function Tabs() {
  const screenOptions = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#161622',
      height: 84,
    },
    activeTintColor: '#ff9c01',
    inactiveTintColor: '#cdcde0',
    tabBarActiveTintColor: '#ff9c01',
    tabBarInactiveTintColor: '#cdcde0',
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      paddingBottom: 25,
    },
    tabBarItemStyle: {paddingTop: 20},
  };
  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{width: 18, height: 19,    tintColor: focused ? '#ff9c01' : '#cdcde0',}}
                source={home}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{width: 18, height: 19,tintColor: focused ? '#ff9c01' : '#cdcde0',}}
                source={profile}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          title: 'Create',
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{width: 18, height: 19, tintColor: focused ? '#ff9c01' : '#cdcde0',}}
                source={created}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Home}
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{width: 18, height: 19, tintColor: focused ? '#ff9c01' : '#cdcde0',}}
                source={saved}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
