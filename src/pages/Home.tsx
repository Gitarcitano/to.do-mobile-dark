import React, { Dispatch, useState } from 'react';
import { Switch, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Header } from '../components/Header';

import { MyTasksList } from '../components/MyTaskList';
import { TodoInput } from '../components/TodoInput';


interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface HomeProps {
  lightThemeSelected: boolean;
  handleThemeChange: Dispatch<boolean>;
}

export function Home({ lightThemeSelected, handleThemeChange }: HomeProps) {
  const { colors } = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle) {
      setTasks(oldState => [
        ...oldState,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false,
        }
      ]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const tasksCopy = [...tasks]
    const index = tasksCopy.findIndex(item => item.id === id);
    if(index > -1) {
      tasksCopy[index].done = !tasksCopy[index].done;
      setTasks(tasksCopy);
    }
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Header 
        lightThemeSelected={lightThemeSelected}
        handleThemeChange={handleThemeChange}
      />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}