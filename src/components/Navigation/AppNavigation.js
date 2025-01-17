import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import SidebarLayout from './SidebarLayout';
import I18n from '../../translations';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <SidebarLayout {...props} />}
      screenOptions={({route}) => ({
        drawerIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'md-home';
          } else if (route.name === 'Profile') {
            iconName = 'ios-contact';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Stack.Screen
        name="Home"
        options={{
          title: I18n.t('navigation.home'),
        }}
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        options={{
          title: I18n.t('profile.profile'),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
