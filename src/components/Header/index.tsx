import React, { Dispatch } from 'react';
import { StatusBar, Platform, Switch, View, Text as ReactText } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, IOSContainer, Text } from './styles';

interface HeaderProps {
  lightThemeSelected: boolean;
  handleThemeChange: Dispatch<boolean>;
}

export function Header({lightThemeSelected, handleThemeChange}: HeaderProps) {
  const { colors } = useTheme();
  
  function HeaderContent() {
    return (
    <Container statusBarHeight={StatusBar.currentHeight}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>to.</Text>
          <Text bold>do</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 16}}>
        <ReactText style={{marginRight: 16, color: '#f4f3f4', marginTop: 8}}>dark theme</ReactText>
        <Switch
          trackColor={{ false: "#888888", true: colors.new_task_button }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#888888"
          onValueChange={handleThemeChange}
          value={lightThemeSelected}
        />
      </View>
    </Container>
    )
  }

  function IOSHeader(){
    return (
      <IOSContainer>
        {HeaderContent()}
      </IOSContainer>
    )
  }

  return (
    <>
      {
        Platform.OS === 'ios' ? IOSHeader() : HeaderContent()
      }
    </>
  )
}

