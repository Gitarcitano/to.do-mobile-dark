import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  margin-top: -25px;
  margin-left: 40px;
  margin-right: 40px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Text = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.new_task_background};
  padding-left: 12px;
  height: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme}) => theme.colors.new_task_button};
  height: 50px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;