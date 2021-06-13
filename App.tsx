import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';
import { ThemeProvider } from 'styled-components/native';
import lightTheme from './src/global/styles/lightTheme';
import darkTheme from './src/global/styles/darkTheme';

export default function App() {
  const [lightThemeSelected, setLightThemeSelected] = useState(true);
  
  return (
    <ThemeProvider theme={lightThemeSelected ? darkTheme : lightTheme}>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home
        lightThemeSelected={lightThemeSelected}
        handleThemeChange={setLightThemeSelected}
      />
    </ThemeProvider>
  );
}
