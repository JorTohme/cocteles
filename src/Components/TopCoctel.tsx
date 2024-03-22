import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { fetchCocteles } from '../../fetchs/Cocteles';
import Coctel from './Coctel';

interface CoctelData {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strInstructionsES: string;
}

export default function TopCoctel() {
  const [loading, setLoading] = useState(true);
  const [coctelData, setCoctelData] = useState({} as CoctelData);

  useEffect(() => {
    fetchCocteles().then((data) => {
      setCoctelData(data.drinks[0]);
      setLoading(false);
    });
  }, []);
  
  if (!loading) return (
    <View style={{marginRight: 20}}>
      <Coctel data={coctelData} />
    </View>
  )
}

