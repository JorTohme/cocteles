import React from 'react'
import { ScrollView, Text } from 'react-native'
import styled from 'styled-components/native';
import { Colors } from '../Utils/Colors';

interface CoctelData {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strInstructionsES: string;
}


export default function Coctel({data}: {data: CoctelData}) {

  return(
    <Container>
      <CoctelImage source={{uri: data.strDrinkThumb}}  />
      <CoctelName>{data.strDrink}</CoctelName>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: 90,}}>
        <CoctelDescription>{data.strInstructionsES ? data.strInstructionsES : data.strInstructions}</CoctelDescription>
      </ScrollView>
      <CoctelButton>
        <Text>Ver receta</Text>
      </CoctelButton>
    </Container>
  )
}


const Container = styled.View`
  padding-bottom: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  height: 345px;
  width: 284px;
  align-items: center;
  overflow: hidden;
  background-color: white;
  justify-content: space-between;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;

  margin-bottom: 20px;
`

const CoctelImage = styled.Image`
  width: 100%;
  height: 146px;
  resize-mode: cover;
`

const CoctelName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-vertical: 10px;
`

const CoctelDescription = styled.Text`
  padding-horizontal: 10px;
  text-align: left;
`

const CoctelButton = styled.TouchableOpacity`
  background-color: ${Colors.primaryYellow};
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 10px;
`
