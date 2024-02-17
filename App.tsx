import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';

export default function App(this: any) {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}