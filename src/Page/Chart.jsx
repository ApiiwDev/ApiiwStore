import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Card from '../Components/Chart/Card';
import keyboardImg from '../Image/keyboard.jpg';
import FooterChart from '../Components/Chart/FooterChart';
import AppBar from '../Components/AppBar';

import data from '../data/products.json';

const Chart = ({navigation}) => {
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);

  const HandleDelete = () => {
    console.log('Deleted');
  };

  useEffect(() => {
    console.log({Chart_Quantity: qty, Chart_Total: total});
  }, [qty, total]);
  return (
    <View style={{position: 'relative', flex: 1}}>
      <AppBar navigation={navigation} title={'Chart'} />
      <ScrollView
        style={ChartStyle.listChart}
        contentContainerStyle={{paddingBottom: 15}}>
        {data.map(e => (
          <Card
            delete={HandleDelete}
            title={e.title}
            image={e.image}
            price={e.price}
            funcs={setTotal}
            func={setQty}
            has={qty}
            hass={total}
            key={e.itemId}
          />
        ))}
      </ScrollView>
      <FooterChart totals={total} qtys={qty} />
    </View>
  );
};
const ChartStyle = StyleSheet.create({
  listChart: {
    width: '100%',
    height: 60,
    maxHeight: 665,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#4E3636',
  },
});
export default Chart;
