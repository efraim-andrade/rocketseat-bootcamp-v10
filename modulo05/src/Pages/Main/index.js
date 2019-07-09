import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import Container from '../../Components/Container';

import { Form, SubmitButton, List, Input } from './styles';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const storageRepos = localStorage.getItem('repositories');

    if (storageRepos) {
      setRepositories(JSON.parse(localStorage.getItem('repositories')));
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const isDuplicated = repositories.filter(
        repository => repository.name === newRepo
      );

      if (isDuplicated) throw new Error('Repositório Duplicado');

      const response = await api.get(`repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      setNewRepo('');
      setError(false);
      setRepositories([...repositories, data]);
      localStorage.setItem(
        'repositories',
        JSON.stringify([...repositories, data])
      );
    } catch (err) {
      alert(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          error={error}
          value={newRepo}
          placeholder="Adicionar repositório"
          onChange={e => setNewRepo(e.target.value)}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repository => (
          <li key={repository.name}>
            <span>{repository.name}</span>

            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
