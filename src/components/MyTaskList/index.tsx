import React from 'react';
import { FlatList, View, Switch } from 'react-native';
import { HeaderText, TaskContainer, TaskMarker, TaskText } from './styles';

function FlatListHeaderComponent() {
  return (
    <View>
      <HeaderText>Minhas tasks</HeaderText>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <View style={{flex: 1}}>
            <TaskContainer
              testID={`button-${index}`}
              activeOpacity={0.7}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
              done={item.done}
            >
              <TaskMarker 
                testID={`marker-${index}`}
                done={item.done}
              />
              <TaskText
                done={item.done}
              >
                {item.title}
              </TaskText>
            </TaskContainer>
          </View>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}
