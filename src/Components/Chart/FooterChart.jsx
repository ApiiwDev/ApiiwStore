import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FooterChart = props => {
  const {qtys, totals} = props;
  const qty = qtys ? qtys : 0;
  const [dis, setDis] = useState(true);
  const formattedTotal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(totals);
  const HandlerCheckout = () => {}
  useEffect(() => {
    if (qty === 0) {
      setDis(true);
    } else {
      setDis(false);
    }
  }, [qty, dis]);
  return (
    <View style={Style.case}>
      <View style={Style.total}>
        <Text style={{color: 'white'}}>Total Harga</Text>
        <Text style={{color: 'white'}}>{totals ? formattedTotal : '-'}</Text>
      </View>
      <View style={Style.checkOut}>
        <TouchableOpacity
          disabled={dis}
          style={Style.buttonCheckOut}
          onPress={HandlerCheckout}>
          <Text style={{color: 'white'}}>Checkout ({qty})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  case: {
    width: '100%',
    height: 60,
    backgroundColor: 'black',
    elevation: 10,
    borderColor: '#6D5D6E',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    height: '100%',
    width: 150,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  checkOut: {
    height: '100%',
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCheckOut: {
    backgroundColor: '#6D5D6E',
    borderRadius: 5,
    padding: 10,
  },
});
export default FooterChart;
