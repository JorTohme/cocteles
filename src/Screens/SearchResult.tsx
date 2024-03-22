import { Colors } from '../Utils/Colors';
import styled from 'styled-components/native';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { searchCoctelbyName, searchCoctelbyIngredient, searchCoctelbyCategory } from '../../fetchs/Cocteles';
import React, { useEffect, useState } from 'react';
import Coctel from '../Components/Coctel';
import SearchBar from '../Components/SearchBar';
import { saveSearch } from '../Utils/PreviousSearch';

export default function SearchResult({navigation, route}: any) {
  
  const [searchResults, setSearchResults] = useState([] as any[]);
  const [loading, setLoading] = useState(true);
  
  const {searchParam, filter} = route.params;
  const [newSearchParam, setNewSearchParam] = useState('searchParam');

  const handleSearch = () => {
    if (newSearchParam.length === 0) return;
    saveSearch(newSearchParam);
    navigation.navigate('SearchResult', {searchParam: newSearchParam});
  }

  useEffect(() => {
    switch (filter) {
      case 'name':
        searchCoctelbyName(searchParam).then((data) => {
          setSearchResults(data.drinks ? data.drinks : []);
          setLoading(false);
        });
        break;
      case 'ingredients':
        searchCoctelbyIngredient(searchParam).then((data) => {
          setSearchResults(data.drinks ? data.drinks : []);
          setLoading(false);
        });
        break;
      case 'categories':
        searchCoctelbyCategory(searchParam).then((data) => {
          setSearchResults(data.drinks ? data.drinks : []);
          setLoading(false);
        });
        break;
    }
  }, [searchParam]);

  return (
    <>
      <SafeArea />
      <Header />
      <MainContainer>
        <View style={{paddingHorizontal: 20}}>
          <SearchBar cancelAction={() => navigation.goBack()} setSearchParam={setNewSearchParam} handleSearch={handleSearch} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} 
        contentContainerStyle={{paddingBottom: 60, alignItems: 'center'}}
        >
          {loading && <Text>Cargando...</Text>}
          {!loading && searchResults.length === 0 && !loading && <Text>No se encontraron resultados</Text>}
          {
            !loading && searchResults.length > 0 && searchResults.map((coctel, index) => (
              <Coctel key={index} data={coctel} />
            ))
          }
        </ScrollView>
      </MainContainer>
    </>
  )
}

const SafeArea = styled(SafeAreaView)`
  background-color: ${Colors.background};
`
const Header = styled.View`
  background-color: ${Colors.background};
  width: 100%;
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

const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: white;
`