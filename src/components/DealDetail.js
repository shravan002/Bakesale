import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';
import {priceDisplay} from './util.js';

class DealDetail extends React.Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };
  render() {
    const {deal} = this.state;
    return (
      <View style={styles.deal}>
        <Image source={{uri: deal.media[0]}} style={styles.image}></Image>
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <Text style={styles.cause}>{deal.cause.name}</Text>
          <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
        </View>
        <Text>...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});
export default DealDetail;
