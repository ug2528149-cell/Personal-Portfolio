import { NavigationContainer } from
  "@react-navigation/native";
import { createNativeStackNavigator } from
  "@react-navigation/native-stack";

import TabNavigator from "./tabNavigator";
import ProjectDetailsScreen from
  "../screens/projectDetailsScreen";
import type { RootStackParamList } from "./types";
import { colors } from "../theme/colors";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProjectDetails"
          component={ProjectDetailsScreen}
          options={{ title: "Project details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}