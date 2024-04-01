import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import StatisticalScreen from '../screens/StatisticalScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { Colors, Fontsizes } from '../constants';

const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                        return <Icon1 name={iconName} size={size} color={color} />;
                    } else if (route.name === 'list') {
                        iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
                        return <Icon1 name={iconName} size={size} color={color} />;
                    } else if (route.name === 'statistical') {
                        iconName = focused ? 'chart-bar' : 'chart-bar';
                        return <Icon1 name={iconName} size={size} color={color} />;
                    } else if (route.name === 'setting') {
                        return (
                            <View style={styles.settingIconContainer}>
                                <Icon2 name="settings" size={Fontsizes.fs_24} color={color} />
                            </View>
                        );
                    }
                },
                tabBarActiveTintColor: '#CB2D49',
                tabBarInactiveTintColor: '#D9D6E5',
                tabBarStyle: { backgroundColor: Colors.Pink },
                headerShown: false
            })}
        >
            <Tab.Screen name='home' component={HomeScreen} />
            <Tab.Screen name='list' component={ListScreen} />
            <Tab.Screen name='statistical' component={StatisticalScreen} />
            <Tab.Screen name='setting' component={SettingScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    settingIconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingCogIcon: {
        marginLeft: 5, // Adjust the spacing between two icons as needed
    }
});

export default BottomTab;
