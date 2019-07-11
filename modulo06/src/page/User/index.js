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
  const [page, setPage] = useState(2);
  const user = navigation.getParam('user');

  useEffect(() => {
    async function fetchUserInfo() {
      const userInfo = navigation.getParam('user');

      try {
        const { data } = await api.get(`/users/${userInfo.login}/starred`);

        setStars(data);
      } catch (err) {
        console.tron.log(err.message);
      }
    }

    fetchUserInfo();
  }, []);

  async function loadMore() {
    const userInfo = navigation.getParam('user');

    try {
      const { data } = await api.get(`/users/${userInfo.login}/starred`, {
        params: {
          page,
        },
      });

      setStars([...stars, ...data]);
      setPage(page + 1);
    } catch (err) {
      console.tron.log(err.message);
    }
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: user.avatar }} />

        <Name>{user.name}</Name>

        <Bio>{user.bio}</Bio>
      </Header>

      <Stars
        data={stars}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
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
