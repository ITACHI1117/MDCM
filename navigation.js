import React from 'react';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import WEEK2 from './Screens/WEEK 2';
import WEEK3 from './Screens/WEEK 3';
const Tab = createBottomTabNavigator();
<BottomTabBar>
<Tab.Navigator style={{ position: 'absolute'}}
         
        
         screenOptions={({ route, }) => ({
           
           tabBarStyle: { position: 'absolute',
           backgroundColor: '#327B5B', },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            
                function Page1 ({ navigation }) {
                  return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text>HOMEEE</Text>
                      <Button
                        title="Go to WEEK1"
                        onPress={() => navigation.navigate('WEEK2')}
                      />
                    </View>
                  );
                }
            } 
            
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            }
            else if (route.name === 'Next') {
              iconName = focused ? 'ios-arrow-forward-circle-outline' : 'ios-arrow-forward-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
          tabBarStyle: 'absolute' ,              
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: colors.text,
          
        })}>
          
        <Tab.Screen name="Settings" component={WEEK2} />
        <Tab.Screen name="Home" component={WEEK2} />
        <Tab.Screen name="Next" component={WEEK3} />
        
      </Tab.Navigator>
</BottomTabBar>
      export default BottomTabBar