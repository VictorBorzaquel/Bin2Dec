import React from 'react';
import * as Clipboard from 'expo-clipboard';

import {
  Container,
  CopyButton,
  CopyText,
  Header,
  Input,
  InputTitle
} from './styles';

export function UIInput({ onChangeText, value, inputTitle }: {
  onChangeText: ((text: string) => void);
  value: string;
  inputTitle: string;
}) {
  function handleCopy() {
    if (value !== '') {
      Clipboard.setString(value)
    }
  }
  return (
    <Container>
      <Header>
        <InputTitle>{inputTitle}</InputTitle>
        <CopyButton onPress={handleCopy}>
          <CopyText>Copiar</CopyText>
        </CopyButton>
      </Header>

      <Input
        keyboardType='numeric'
        onChangeText={onChangeText}
        value={value}
      />
    </Container>
  )
}