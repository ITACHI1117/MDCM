import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
 
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import theme from './theme';





function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  const { setTheme, theme } = React.useContext(ThemeContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: Colors.text}}>Dark</Text>
      <Button
        title="Switch Theme"
        onPress={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}
        if
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('DarkMode', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}




const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <SafeAreaProvider>
    <Tab.Navigator
      screenOptions={({ route, }) => ({
  
  tabBarStyle: { position: 'absolute',
  backgroundColor: '#327B5B', },
 tabBarIcon: ({ focused, color, size }) => {
   let iconName;

   if (route.name === 'Home') {
     iconName = focused
       ? 'ios-home'
       : 'ios-home';
   } 
   
   else if (route.name === 'Settings') {
     iconName = focused ? 'ios-settings' : 'ios-settings';
   }
   else if (route.name === 'Theme') {
     iconName = focused ? 'ios-moon-outline' : 'ios-sunny-outline';
   }

   // You can return any component that you like here!
   return <Ionicons name={iconName} size={size} color={color} />;
   
 },
 tabBarStyle: 'absolute' ,              
 tabBarActiveTintColor: '#217aff',
 tabBarInactiveTintColor: 'gray',
 
})}>
      
      
      
      
      <Tab.Screen name='Home' component={DrawerNavigator} options={{header: () => null}}/>
      <Tab.Screen name="Theme" component={DarkMode} />
    </Tab.Navigator>
    </SafeAreaProvider>
  );
};


import WEEK1 from "./Screens/WEEK 1";
import WEEK2 from './Screens/WEEK 2';
import WEEK3 from './Screens/WEEK 3';
import WEEK4 from './Screens/WEEK 4';
import WEEK5 from './Screens/WEEK 5';
import WEEK6 from './Screens/WEEK 6';
import WEEK7 from './Screens/WEEK 7';
import WEEK8 from './Screens/WEEK 8';
import WEEK9 from './Screens/WEEK 9';
import WEEK10 from './Screens/WEEK 10';
import WEEK11 from './Screens/WEEK 11';
import WEEK12 from './Screens/WEEK 12';
import WEEK13 from './Screens/WEEK 13';
import WEEK14 from './Screens/WEEK 14';
import WEEK15 from './Screens/WEEK 15';
import WEEK16 from './Screens/WEEK 16';
import WEEK17 from './Screens/WEEK 17';
import WEEK18 from './Screens/WEEK 18';
import WEEK19 from './Screens/WEEK 19';
import WEEK20 from './Screens/WEEK 20';
import WEEK21 from './Screens/WEEK 21';
import WEEK22 from './Screens/WEEK 22';
import WEEK23 from './Screens/WEEK 23';
import WEEK24 from './Screens/WEEK 24';
import WEEK25 from './Screens/WEEK 25';
import WEEK26 from './Screens/WEEK 26';
import WEEK27 from './Screens/WEEK 27';
import WEEK28 from './Screens/WEEK 28';
import WEEK29 from './Screens/WEEK 29';
import WEEK30 from './Screens/WEEK 30';
import WEEK31 from './Screens/WEEK 31';
import WEEK32 from './Screens/WEEK 32';
import WEEK33 from './Screens/WEEK 33';
import WEEK34 from './Screens/WEEK 34';
import WEEK35 from './Screens/WEEK 35';
import WEEK36 from './Screens/WEEK 36';
import WEEK37 from './Screens/WEEK 37';
import WEEK38 from './Screens/WEEK 38';
import WEEK39 from './Screens/WEEK 39';
import WEEK40 from './Screens/WEEK 40';
import WEEK41 from './Screens/WEEK 41';
import WEEK42 from './Screens/WEEK 42';
import WEEK43 from './Screens/WEEK 43';
import WEEK44 from './Screens/WEEK 44';
import WEEK45 from './Screens/WEEK 45';
import WEEK46 from './Screens/WEEK 46';
import WEEK47 from './Screens/WEEK 47';
import WEEK48 from './Screens/WEEK 48';
import WEEK49 from './Screens/WEEK 49';
import WEEK50 from './Screens/WEEK 50';
import WEEK51 from './Screens/WEEK 51';
import WEEK52 from './Screens/WEEK 52';
import Page1 from './Screens/Page1';
import Colors from './constants/Colors';




const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
    <Drawer.Navigator >
         <Drawer.Screen name="HOME" component={Page1} />
          <Drawer.Screen name="WEEK 1" component={WEEK1} /> 
          <Drawer.Screen name="WEEK 2" component={WEEK2} /> 
          <Drawer.Screen name="WEEK 3" component={WEEK3} /> 
          <Drawer.Screen name="WEEK 4" component={WEEK4} /> 
          <Drawer.Screen name="WEEK 5" component={WEEK5} />
          <Drawer.Screen name="WEEK 6" component={WEEK6} />
          <Drawer.Screen name="WEEK 7" component={WEEK7} /> 
          <Drawer.Screen name="WEEK 8" component={WEEK8} /> 
          <Drawer.Screen name="WEEK 9" component={WEEK9} /> 
          <Drawer.Screen name="WEEK 10" component={WEEK10} /> 
          <Drawer.Screen name="WEEK 11" component={WEEK11} />
          <Drawer.Screen name="WEEK 12" component={WEEK12} />  
          <Drawer.Screen name="WEEK 13" component={WEEK13} />    
          <Drawer.Screen name="WEEK 14" component={WEEK14} />  
          <Drawer.Screen name="WEEK 15" component={WEEK15} />  
          <Drawer.Screen name="WEEK 16" component={WEEK16} />  
          <Drawer.Screen name="WEEK 17" component={WEEK17} />  
          <Drawer.Screen name="WEEK 18" component={WEEK18} />  
          <Drawer.Screen name="WEEK 19" component={WEEK19} />  
          <Drawer.Screen name="WEEK 20" component={WEEK20} />  
          <Drawer.Screen name="WEEK 21" component={WEEK21} />  
          <Drawer.Screen name="WEEK 22" component={WEEK22} />  
          <Drawer.Screen name="WEEK 23" component={WEEK23} />  
          <Drawer.Screen name="WEEK 24" component={WEEK24} />  
          <Drawer.Screen name="WEEK 25" component={WEEK25} />  
          <Drawer.Screen name="WEEK 26" component={WEEK26} />  
          <Drawer.Screen name="WEEK 27" component={WEEK27} />  
          <Drawer.Screen name="WEEK 28" component={WEEK28} />  
          <Drawer.Screen name="WEEK 29" component={WEEK29} />  
          <Drawer.Screen name="WEEK 30" component={WEEK30} />  
          <Drawer.Screen name="WEEK 31" component={WEEK31} />  
          <Drawer.Screen name="WEEK 32" component={WEEK32} />  
          <Drawer.Screen name="WEEK 33" component={WEEK33} />  
          <Drawer.Screen name="WEEK 34" component={WEEK34} />  
          <Drawer.Screen name="WEEK 35" component={WEEK35} />  
          <Drawer.Screen name="WEEK 36" component={WEEK36} />  
          <Drawer.Screen name="WEEK 37" component={WEEK37} />  
          <Drawer.Screen name="WEEK 38" component={WEEK38} />  
          <Drawer.Screen name="WEEK 39" component={WEEK39} />  
          <Drawer.Screen name="WEEK 40" component={WEEK40} />  
          <Drawer.Screen name="WEEK 41" component={WEEK41} />  
          <Drawer.Screen name="WEEK 42" component={WEEK42} />  
          <Drawer.Screen name="WEEK 43" component={WEEK43} />  
          <Drawer.Screen name="WEEK 44" component={WEEK44} />  
          <Drawer.Screen name="WEEK 45" component={WEEK45} />  
          <Drawer.Screen name="WEEK 46" component={WEEK46} />  
          <Drawer.Screen name="WEEK 47" component={WEEK47} />  
          <Drawer.Screen name="WEEK 48" component={WEEK48} />  
          <Drawer.Screen name="WEEK 49" component={WEEK49} />  
          <Drawer.Screen name="WEEK 50" component={WEEK50} />  
          <Drawer.Screen name="WEEK 51" component={WEEK51} />  
          <Drawer.Screen name="WEEK 52" component={WEEK52} />
    </Drawer.Navigator></SafeAreaView>
  );
}
const Stack = createStackNavigator();

function DarkMode() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{header: () => null}} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}


export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState('Light');

  const themeData = { theme, setTheme };
  return (
<SafeAreaProvider>
    <ThemeContext.Provider value={themeData}>
      
      <NavigationContainer theme={theme == 'Light' ? DefaultTheme : DarkTheme}>
      <BottomTabNavigator/>
          
      </NavigationContainer>
      
    </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
