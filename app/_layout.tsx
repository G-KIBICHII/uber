/* eslint-disable prettier/prettier */
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
 