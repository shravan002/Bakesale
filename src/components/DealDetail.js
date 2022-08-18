import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {priceDisplay} from './util.js';
import ajax from '../ajax.js';

class DealDetail extends React.Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };
  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({
      deal: fullDeal,
    });
  }
  render() {
    const {deal} = this.state;
    return (
      <View style={styles.deal}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
        <Image source={{uri: deal.media[0]}} style={styles.image}></Image>
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <Text style={styles.cause}>{deal.cause.name}</Text>
          <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
        </View>
        {deal.user && (
          <View style={styles.header}>
            <Image source={{uri: deal.user.avatar}} style={styles.avatar} />
            <Text style={styles.name}>{deal.user.name}</Text>
          </View>
        )}
        <View style={styles.descBox}>
          <Text style={styles.description}>{deal.description}</Text>
        </View>
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
  avatar: {
    height: 60,
    width: 60,
    padding: 10,
  },
  header: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    padding: 10,
  },
  descBox: {
    padding: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  description: {
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderStyle: 'dotted',
  },
  backLink: {
    marginBottom: 5,
    color: '#22f',
  },
});
export default DealDetail;
