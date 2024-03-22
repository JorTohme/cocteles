import React, { useState } from 'react'
import styled from 'styled-components/native'

interface SearchBarProps {
  cancelAction: () => void;
  setSearchParam: (text: string) => void;
  handleSearch: () => void;
  autoFocus?: boolean;
}

export default function SearchBar ({cancelAction, setSearchParam, handleSearch, autoFocus}: SearchBarProps) {
  return (
    <SearchContainer>
      <SearchInput placeholder="Buscar"
      onChangeText={(text) => setSearchParam(text)}
      onSubmitEditing={() => handleSearch()}
      autoFocus={autoFocus}
      />
      <CancelButton onPress={() => cancelAction()}>
        <Cancel>Cancelar</Cancel>
      </CancelButton>
    </SearchContainer>
  )
}


const SearchInput = styled.TextInput`
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  height: 36px;
  width: 75%;
`
const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justifyContent: 'space-between',
`

const Cancel = styled.Text`
  color: black;
  font-size: 18px;
  text-align: right;
`

const CancelButton = styled.TouchableOpacity`
  width: 25%;
  align-content: 'center';
  margin-top: 10px;
`
