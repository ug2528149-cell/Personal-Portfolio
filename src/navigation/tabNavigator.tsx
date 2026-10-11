import { createBottomTabNavigator } from
  "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/homeScreen";
import SkillsScreen from "../screens/skillsScreen";
import ProjectsScreen from "../screens/projectsScreen";
import EditProfileScreen from "../screens/editProfileScreen";
import AboutScreen from "../screens/aboutScreen";
import type { TabParamList } from "./types";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Skills" component={SkillsScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Edit" }}
      />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}