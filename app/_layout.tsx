import { useEffect } from "react";
import { Stack } from "expo-router";
import { testSupabaseConnection } from "../utils/checkConnection";

export default function RootLayout() {
  console.log("--- LAYOUT RENDERED ---"); // This should show up instantly

  useEffect(() => {
    console.log("--- LAYOUT MOUNTED (useEffect) ---");
    //testSupabaseConnection();
  }, []);

  return <Stack />;
}