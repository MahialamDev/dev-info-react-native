import Navbar from '@/components/layout/Navbar';
import { Stack } from 'expo-router';
import { Dimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const screen = Dimensions.get('window').height;
  return (
    <View style={{flex: 1, paddingTop: insets.top, minHeight: screen}}>
       <Navbar />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
   

  );
}