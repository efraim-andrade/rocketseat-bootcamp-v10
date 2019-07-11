import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

function User({ navigation }) {
  const [stars, setStars] = useState([]);
  const user = navigation.getParam('user');

  useEffect(() => {
    async function fetchUserInfo() {
      const user = navigation.getParam('user');

      try {
        const { data } = await api.get(`/users/${user.login}/starred`);

        setStars([...data]);
      } catch (err) {
        console.tron.log(err.message);
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />

        <Name>{user.name}</Name>

        <Bio>{user.bio}</Bio>
      </Header>

      <Stars
        data={stars}
        keyExtractor={star => String(star.id)}
        renderItem={({ item }) => (
          <Starred>
            <OwnerAvatar source={{ uri: item.owner.avatar_url }} />

            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />
    </Container>
  );
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default {
  screen: User,
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('user').name,
  }),
};
