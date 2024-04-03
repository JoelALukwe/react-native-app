import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import AuthContext from './AuthContext';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { authContext } = useContext(AuthContext);

  const handleSignIn = () => {
    // Call signIn function from authContext with username and password
    authContext.signIn({ username, password });
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
