import React, { useState, useEffect } from 'react'; 
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native'
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationList from './src/components/QuotationsList'
import QuotationItems from './src/components/QuotationsList/QuotationsItems'

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = 
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays); //Setando para o dias anteriores do parâmetro
  const start_date = 
  `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  //URL  GET API
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

async function getListCoins(url) {
  let response = await fetch(url);
  let retunrApi = await response.json();
  let selectListQuotations = retunrApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  });
  let dataG = queryCoinsListG;
  return dataG;
}

export default function App() {

  const [coinList, setCoinList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)

  function updateDay(number){
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => { //Toda vez que o componente for carregado
    getListCoins(url(days)).then((data) => {
      setCoinList(data)
    });
    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG);
    });
    if(updateData){
      setUpdateData(false)
    }
  },[updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#f50d41"
      barStyle="dark-content">
      </StatusBar>
      <CurrentPrice/>
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationList filterDay={updateDay} listTransactions={coinList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
