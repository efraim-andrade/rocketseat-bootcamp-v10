import React, { useState, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileText,
} from './styles';

function Main({ navigation }) {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStorageUsers() {
      const storageUsers = await AsyncStorage.getItem('users');

      if (storageUsers) {
        setUsers(JSON.parse(storageUsers));
      }
    }

    fetchStorageUsers();
  }, []);

  async function handleAddUsers() {
    try {
      setLoading(true);

      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      const storageData = [...users, data];

      setUsers(storageData);
      setNewUser('');

      await AsyncStorage.setItem('users', JSON.stringify(storageData));
    } catch (error) {
      console.tron.log(error.message);
    } finally {
      Keyboard.dismiss();
      setLoading(false);
    }
  }

  function handleNavigate(user) {
    navigation.navigate('User', { user });
  }

  return (
    <Container>
      <Form>
        <Input
          value={newUser}
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          onSubmitEditing={handleAddUsers}
          onChangeText={text => setNewUser(text)}
        />

        <SubmitButton loading={loading} onPress={() => handleAddUsers()}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={user => String(user.login)}
        renderItem={({ item }) => (
          <User>
            <Avatar source={{ uri: item.avatar }} />

            <Name>{item.name}</Name>

            <Bio>{item.bio}</Bio>

            <ProfileButton onPress={() => handleNavigate(item)}>
              <ProfileText>ver perfil</ProfileText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Main.navigationOptions = {
  title: 'Usuários',
};

export default Main;
