import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 30px 12px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

export const InputTitle = styled.Text`
  font-size: 18px;
  padding-bottom: 5px;
`;

export const CopyButton = styled(BorderlessButton)`
  
`;

export const CopyText = styled.Text`
  
`;

export const Input = styled.TextInput`
  border-color: black;
  border-width: 1px;
  border-radius: 20px;
  padding: 11px 18px;
`;