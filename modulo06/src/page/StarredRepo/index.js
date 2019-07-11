import React from 'react';
import PropTypes from 'prop-types';
import WebView from 'react-native-webview';

function StarredRepo({ navigation }) {
  const repository = navigation.getParam('item');

  return <WebView style={{ flex: 1 }} source={{ uri: repository.html_url }} />;
}

StarredRepo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default {
  screen: StarredRepo,
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('item').name,
  }),
};
