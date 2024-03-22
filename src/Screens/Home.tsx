import { Colors } from '../Utils/Colors';
import styled from 'styled-components/native';
import { SafeAreaView, Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import TopCoctel from '../Components/TopCoctel';

export default function Home({navigation}: any) {
  const [selectedFilter, setSelectedFilter] = useState('name');

  return (
    <>
      <SafeArea />
      <Header>
        <Image source={require('../../assets/Cocteles.png')} style={{width: 50, height: 50}} />
        <WelcomeText>¡Hola, Usuario!</WelcomeText>
      </Header>
      <MainContainer>
        <View style={{paddingHorizontal: 20}}>
          <Title>Encuentra las mejores {'\n'}recetas en Cócteles</Title>
          <Text>¿Qué trago te gustaría preparar hoy?</Text>
          <SearchInput onPress={() => navigation.navigate('Search', {filter: selectedFilter})}>
            <Text>Buscar</Text>
          </SearchInput>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 20,
            width: '100%'
          }}>
            <Filters horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}}>
              <Text style={{marginRight: 20}}>Filtros</Text>
              <Filter onPress={() => setSelectedFilter('name')} style={selectedFilter === 'name' && styles.selected}>
                <Text>Por nombre</Text>
              </Filter>
              <Filter onPress={() => setSelectedFilter('ingredients')} style={selectedFilter === 'ingredients' && styles.selected}>
                <Text>Por ingredientes</Text>
              </Filter>
              <Filter onPress={() => setSelectedFilter('categories')} style={selectedFilter === 'categories' && styles.selected}>
                <Text>Por categoría</Text>
              </Filter>
            </Filters>
          </View>
          <Title>Los tragos más elegidos</Title>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingLeft: 20}}
        >
          <TopCoctel />
          <TopCoctel />
          <TopCoctel />
          <TopCoctel />
          <TopCoctel />
          <TopCoctel />
          <TopCoctel />
        </ScrollView>
      </MainContainer>
    </>
  )
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#e8e8e8',
  },
});

const SafeArea = styled(SafeAreaView)`
  background-color: ${Colors.background};
`
const Header = styled.View`
  background-color: ${Colors.background};
  width: 100%;
  padding: 0 20px 5px 20px;
  height: 55px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`

const WelcomeText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`

const Title = styled.Text`
  color: black;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`
const MainContainer = styled.ScrollView`
  padding-vertical: 20px;
  flex: 1;
  background-color: white;
`

const SearchInput = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 20px;
  background-color: #e6e6e6;
  height: 36px;
`

const Filter = styled.TouchableOpacity`
  padding-vertical: 7px;
  padding-horizontal: 20px;
  border-radius: 100px;
  margin-right: 10px;
  border: 1px solid black;
`

const Filters = styled.ScrollView`
  width: 100%;

  background-color: white;
`



