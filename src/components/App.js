import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ajax from '../ajax';
import DealDetail from './DealDetail';
import Deals from './Deals';

class App extends React.Component {
  state = {
    deals: [],
    currentDealId: null,
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState(() => {
      return {deals};
    });
  }
  setCurrentDeal = dealId => {
    this.setState({
      currentDealId: dealId,
    });
  };
  unsetCurrentDeal = () => {
    this.setState({
      currentDealId: null,
    });
  };
  currentDeal = () => {
    return this.state.deals.find(deal => deal.key === this.state.currentDealId);
  };
  render() {
    if (this.state.currentDealId) {
      return (
        <DealDetail
          initialDealData={this.currentDeal()}
          onBack={this.unsetCurrentDeal}
        />
      );
    }
    if (this.state.deals.length > 0) {
      return (
        <Deals deals={this.state.deals} onItemPress={this.setCurrentDeal} />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakesale</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
