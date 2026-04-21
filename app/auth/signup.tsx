import React, { useState } from 'react'
import { Alert, StyleSheet, View, TextInput, Button, Text } from 'react-native'
import { supabase } from '@/lib/supabase'
import { Link } from 'expo-router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
