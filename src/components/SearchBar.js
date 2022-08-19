import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet} from 'react-native';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  static propsType = {
    searchDeals: PropTypes.func.isRequired,
  };
  state = {
    searchTerm: '',
  };
  debouncedSearchedDeals = debounce(this.props.searchDeals, 300);
  handleChange = searchTerm => {
    this.setState({searchTerm}, () => {
      this.debouncedSearchedDeals(this.state.searchTerm);
    });
  };
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder="Search all Deals"
        onChange={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 10,
  },
});

export default SearchBar;
