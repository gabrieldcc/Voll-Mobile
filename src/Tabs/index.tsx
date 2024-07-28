import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "./Principal";
import Consultas from "./Consultas";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#002851"
                    },
                    tabBarActiveTintColor: "#339cff",
                    tabBarInactiveTintColor: "#FFF"
                }}
            >
                <Tab.Screen
                    name="Principal"
                    component={Principal}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Consultas"
                    component={Consultas}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="calendar"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    )
}
