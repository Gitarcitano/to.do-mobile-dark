import React, { useState } from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components/native';

import checkIcon from '../../assets/icons/Check.png';
import { Container, Text, Button } from './styles';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const { colors } = useTheme();
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('')
  }

  return (
    <Container>
      <Text 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={colors.text}
      />
      <Button
        testID="add-new-task-button"
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </Button>
    </Container>
  )
}