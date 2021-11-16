import React, { useState } from 'react';
import { UIInput } from '../../components/UIInput';

import {
  Container,
  Content,
  Header,
  Title
} from './styles';

export function Home() {
  const [bin, setBin] = useState('')
  const [dec, setDec] = useState('')

  function clear() {
    setDec('')
    setBin('')
  }

  function changeBin(number: string) {
    if (number === '') return clear()

    if (number.match(/[0-1]/g)) {
      setBin(number)
      setDec(String(parseInt(number, 2)))
    }
  }

  function changeDec(number: string) {
    if (number === '') return clear()

    if (number.match(/[0-9]/g)) {
      setDec(number)
      setBin(Number(number).toString(2))
    }
  }

  return (
    <Container>
      <Header>
        <Title>Bin2Dec</Title>
      </Header>

      <Content>
        <UIInput
          inputTitle='Binário'
          onChangeText={changeBin}
          value={bin}
        />

        <UIInput
          inputTitle='Decimal'
          onChangeText={changeDec}
          value={dec}
        />
      </Content>
    </Container>
  );
}
