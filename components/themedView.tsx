import { useColorScheme } from '@/hooks/useColorScheme'
import { View, type ViewProps } from 'react-native'

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const colorScheme = useColorScheme()
  const backgroundColor = colorScheme === 'light' ? '#fff' : '#151718'

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}










/*
import { View, type ViewProps, useColorScheme } from 'react-native';


export function ThemedView({ style, ...otherProps }: ViewProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const backgroundColor = colorScheme === 'light' ? '#fff' : '#151718';


  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
*/