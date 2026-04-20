// hooks/use-color-scheme.ts
import { useColorScheme as _useColorScheme } from 'react-native';

export function useColorScheme() {
  const systemScheme = _useColorScheme();
  return systemScheme ?? 'light'; // fallback if null
}
