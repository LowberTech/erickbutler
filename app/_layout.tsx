import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      animation: "flip",
      headerStyle: {
        backgroundColor: "#000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="(auth)/login"
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="(auth)/register"
        options={{
          title: "Register",
        }}
      />
      <Stack.Screen
        name="(auth)/passwordReset"
        options={{
          title: "Password Reset",
        }}
      />

    </Stack>
  );
}
