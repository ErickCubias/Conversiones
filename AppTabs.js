import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Historial from './frontend/Historial';
import Home from './frontend/Home';


const Tab = createBottomTabNavigator();
const AppTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="HIstorial" component={Historial} />

</Tab.Navigator>
);
};
export default AppTabs;
