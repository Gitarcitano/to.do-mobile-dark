import styled from 'styled-components/native'

interface TaskMarkerProps {
  done?: boolean;
}

export const HeaderText = styled.Text`
  color: ${({ theme}) => theme.colors.title_text};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TaskContainer = styled.TouchableOpacity<TaskMarkerProps>`
  flex: 1;
  padding: 12px 10px;
  margin-bottom: 4px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  ${({ done, theme }) => done && `background-color: ${theme.colors.selected_task_background}`};
`;

export const TaskMarker = styled.View<TaskMarkerProps>`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.task_done};
  ${({ done, theme }) => done && `background-color: ${theme.colors.task_done}`};
  margin-right: 10px;
`;

export const TaskText = styled.Text<TaskMarkerProps>`
  color: ${({ done, theme }) => done ? theme.colors.disabled_text : theme.colors.text};
  ${({ done }) => done && `text-decoration-line: line-through`};
`;