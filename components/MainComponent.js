import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createStackNavigator} from 'react-navigation-stack';

const MenuNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Dishdetail: {screen: Dishdetail}
}, {
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color:'#fff'
    }
  }
});

const HomeNavigator = createStackNavigator({
  Home: {screen: Home},
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color:'#fff'
    }
  }
});

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home'
    }
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu'
    }
  }
}, {
    drawerBackgroundColor: '#D1C4E9'
});

const MainContainer = createAppContainer(MainNavigator);
const MenuContainer = createAppContainer(MenuNavigator);
class Main extends Component {


  render() {
 
    return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <MainContainer />
        </View>
    );
  }
}
  
export default Main;