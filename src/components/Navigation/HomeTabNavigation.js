import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Settings from '../../containers/Settings';
import Dashboard from '../../containers/Dashboard';
import Notifications from '../../containers/Notifications';
import {withBadge} from 'react-native-elements';
import I18n from '../../translations';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Dashboard') {
            return <Icon name="md-home" size={30} color={color} />;
          } else if (route.name === 'Settings') {
            return <Icon name="md-settings" size={30} color={color} />;
          } else if (route.name === 'Notifications') {
            const BadgedIcon = withBadge(25)(Icon);
            return (
              <BadgedIcon
                type="ionicon"
                name="ios-list-box"
                size={30}
                color={color}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        options={{
          title: I18n.t('dashboard.dashboard'),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          title: I18n.t('notifications.notifications'),
        }}
        component={Notifications}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: I18n.t('settings.settings'),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
