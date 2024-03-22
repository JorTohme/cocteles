import { Colors } from '../Utils/Colors';
import styled from 'styled-components/native';
import { SafeAreaView, Text, Image, Platform, View, ScrollView, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { searchCoctelbyName } from '../../fetchs/Cocteles';
import React, { useEffect, useState } from 'react';
import Coctel from '../Components/Coctel';
import { saveSearch, getSearches } from '../Utils/PreviousSearch';
import SearchBar from '../Components/SearchBar';

interface CoctelData {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strInstructionsES: string;
}

export default function Search({navigation, route}: any) {
  
  // Hay que añadir un loader
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState('');
  const [previousSearches, setPreviousSearches] = useState([] as string[]);

  const [previousSearchesResults, setPreviousSearchesResults] = useState([] as CoctelData[]);

  const {filter} = route.params;

  useEffect(() => {
    getSearches().then((data) => {
      setPreviousSearches(data);
    });
  }, [previousSearches]);

  const handleSearch = () => {
    if (searchParam.length === 0) return;
    handleRedirect(searchParam)
  }

  const handleRedirect = (param: string) => {
    saveSearch(param);
    navigation.navigate('SearchResult', {searchParam: param, filter: filter});
  }

  useEffect(() => {
    getSearches().then((data) => {
      if (data.length > 0) {
        searchCoctelbyName(data[0]).then((coctelData) => {
          setPreviousSearchesResults(coctelData.drinks ? coctelData.drinks : []);
          setLoading(false);
        });
      }
    })
  }, []);

  return (
    <>
      <SafeArea />
      <Header />
      <MainContainer>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>  
          <SearchBar cancelAction={() => navigation.goBack()} setSearchParam={setSearchParam} handleSearch={handleSearch} autoFocus />
          {
            previousSearches.length > 0 && (
              <PreviousSearch>
                {
                  previousSearches.map((search, index) => (
                    <RecentSearch onPress={() => handleRedirect(search)} key={index}>
                      <Image source={require('../../assets/Recent.png')} style={{width: 25, height: 25}} />
                      <RecentSearchText>{search}</RecentSearchText>
                    </RecentSearch>
                  ))
                }                
              </PreviousSearch>
            )
          }

          {previousSearchesResults.length > 0 && <Title>Tus últimas búsquedas</Title>}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft: 20}}>
          {
            previousSearchesResults.map((coctel, index) => (
              <View style={{marginRight: 20}} key={index} >
                <Coctel data={coctel} />
              </View>
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
  background-color: #f9f9f9;
`

const PreviousSearch = styled.View`
  padding: 10px;
  background-color: white;
  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-bottom: 10px;
  margin-horizontal: 5px;
`

const RecentSearch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const RecentSearchText = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 5px;
`

const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`