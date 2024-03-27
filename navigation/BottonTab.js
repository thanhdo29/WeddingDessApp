import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import CartScreen from '../screens/CartScreen';
import StatisticalScreen from '../screens/StatisticalScreen';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';


const BottonTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'list') {
                        iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';

                    } else if (route.name === 'cart') {
                        iconName = focused ? 'cart' : 'cart-outline';

                    }else if (route.name === 'statistical') {
                        iconName = focused ? 'chart-bar' : 'chart-bar';

                    }

                    return <Icon1 name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#CB2D49',
                tabBarInactiveTintColor: '#D9D6E5',
                tabBarStyle:{backgroundColor:Colors.Pink},
                headerShown:false
            })}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='list' component={ListScreen} />
            <Tab.Screen name='cart' component={CartScreen} />
            <Tab.Screen name='statistical' component={StatisticalScreen} />
        </Tab.Navigator>
    )
}

export default BottonTab

const styles = StyleSheet.create({})