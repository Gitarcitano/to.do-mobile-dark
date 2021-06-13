import styled from 'styled-components/native';

interface ContainerProps {
  statusBarHeight: number | undefined;
}

interface StyledTextProps {
  bold?: boolean;
}

export const IOSContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Container = styled.View<ContainerProps>`
  padding-top: ${({statusBarHeight}) => statusBarHeight ? `${statusBarHeight}px` : 0};
  padding-bottom: 44px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  align-items: center;
  /* flex-direction: row; */
  padding-left: 16px;
  padding-right: 16px;
`;

export const Text = styled.Text<StyledTextProps>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.header_text};
  font-family: ${({ theme, bold}) => bold ? theme.fonts.medium : theme.fonts.regular};
`;
