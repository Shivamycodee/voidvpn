import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Container,Main } from '@/tamagui.config';
import { Text, XStack, YStack } from 'tamagui';
import Navbar from '@/components/navbar'
import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from 'expo-video';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  
  return (
    <Container paddingTop={10} paddingHorizontal={30} backgroundColor={'#1d1d1d'}>
      <Main>
      <StatusBar style="light" backgroundColor="#151515" animated={true} />
        <Navbar/>

      <XStack flex={1} justifyContent='center' alignItems='center' >
        <TouchableOpacity>
      <FontAwesome name="user-secret" size={200} color="white" />
        </TouchableOpacity>
      </XStack>
        
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
