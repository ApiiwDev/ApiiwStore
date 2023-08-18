import {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

const Card = props => {
  const {func, has, funcs, hass, price, key} = props;
  const [qty, setQty] = useState('1');
  const [totalPrice, setTotalPrice] = useState(parseInt(props.price));
  const [a, setA] = useState(false);
  const [check, setCheck] = useState(false);
  key;
  const items = {
    named: undefined,
    quantity: undefined,
    total: undefined,
    key: undefined
  }
  const title = props.title;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(parseInt(price));
  const formattedTotalPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(totalPrice);

  const IncQty = () => {
    setQty(String(parseInt(qty) + 1));
    setTotalPrice(totalPrice + parseInt(price));
    if (has >= 1) funcs(hass + parseInt(price));
    console.log({Card: 'Add'});
  };
  const DecQty = () => {
    setQty(String(parseInt(qty) - 1));
    setTotalPrice(totalPrice - parseInt(price));
    if (has >= 1) funcs(hass - parseInt(price));
    console.log({Card: 'Remove'});
  };
  const HandlerCheckbox = () => {
    if (check == true) {
      setCheck(false);
      func(has - 1);
      funcs(hass ? hass - totalPrice : hass);
    } else {
      setCheck(true);
      func(has + 1);
      funcs(hass + totalPrice);
    }
  };

  useEffect(() => {
    if (qty == 1) {
      setA(true);
    } else {
      setA(false);
    }
    console.log({Card_Total: totalPrice});
  }, [qty, totalPrice]);
  return (
    <View style={CardStyle.f} key={key}>
      <View style={CardStyle.head}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <CheckBox
            value={check}
            onValueChange={HandlerCheckbox}
            disabled={false}
            tintColors={{true: 'white', false: '#6D5D6E'}}
          />
          <Text style={{color: 'white'}}>{title.substring(0, 10)}...</Text>
        </View>
        <TouchableOpacity onPress={props.delete} style={CardStyle.caseButton}>
          <Text style={{color: 'white'}}>A</Text>
        </TouchableOpacity>
      </View>
      <View style={CardStyle.body}>
        <View style={{display: 'flex', height: '100%', flexDirection: 'row'}}>
          <View style={CardStyle.imgSection}>
            <Image
              source={props.image}
              style={{width: 70, height: 70, borderRadius: 10}}
            />
          </View>
          <View style={CardStyle.nextSection}>
            <View style={CardStyle.priceSection}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {formattedPrice}
              </Text>
            </View>
            <View style={CardStyle.opSection}>
              <View style={CardStyle.op}>
                <TouchableOpacity
                  disabled={a}
                  onPress={DecQty}
                  style={[
                    CardStyle.opButton,
                    {
                      borderRightWidth: 1,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    },
                  ]}>
                  <Text style={{color: 'white'}}>-</Text>
                </TouchableOpacity>
                <TextInput
                  value={qty}
                  keyboardType="numeric"
                  style={CardStyle.inp}
                />
                <TouchableOpacity
                  onPress={IncQty}
                  style={[
                    CardStyle.opButton,
                    {
                      borderLeftWidth: 1,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    },
                  ]}>
                  <Text style={{color: 'white'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Total: {formattedTotalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};
const CardStyle = StyleSheet.create({
  f: {
    width: '100%',
    height: 120,
    backgroundColor: 'black',
    marginVertical: 5,
    borderRadius: 5,
  },
  head: {
    width: '100%',
    height: 30,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomColor: '#6D5D6E',
    borderWidth: 1,
  },
  caseButton: {
    height: 20,
    width: 20,
  },
  body: {
    width: '100%',
    height: 90,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  imgSection: {
    height: '100%',
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextSection: {
    height: '100%',
    width: 100,
  },
  priceSection: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  opSection: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  op: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  opButton: {
    height: '100%',
    width: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  inp: {
    height: '100%',
    width: 28,
    maxWidth: 28,
    color: 'white',
    padding: 0,
    textAlign: 'center',
  },
});
export default Card;
