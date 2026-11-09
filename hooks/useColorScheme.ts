// hooks/use-color-scheme.ts
import { useColorScheme as _useColorScheme } from 'react-native';

export function useColorScheme() {
  const systemScheme = _useColorScheme();
  return systemScheme ?? 'light'; // fallback if null
}

/*useColorScheme is a built-in React Native hook.

It detects the color scheme currently selected on the user's device.

as _useColorScheme renames the imported hook to _useColorScheme.

Why rename it?

Because we want to create our own function called useColorScheme() without conflicting with the imported function.
*/