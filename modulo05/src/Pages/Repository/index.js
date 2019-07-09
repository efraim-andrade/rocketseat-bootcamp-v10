import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../Components/Container';

import {
  Loading,
  Owner,
  IssueList,
  Filters,
  Filter,
  Actions,
  Button,
} from './styles';

export default function Repository({ match }) {
  const [issues, setIssues] = useState({});
  const [loading, setLoading] = useState(true);
  const [stateType, setStateType] = useState('all');
  const [repository, setRepository] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchRepository() {
      setLoading(true);
      const repoName = decodeURIComponent(match.params.repository);

      try {
        const [repoInfo, repoIssues] = await Promise.all([
          await api.get(`/repos/${repoName}`),
          await api.get(`/repos/${repoName}/issues`, {
            params: {
              state: stateType,
              per_page: 5,
              page,
            },
          }),
        ]);

        setRepository(repoInfo.data);
        setIssues(repoIssues.data);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepository();
  }, [stateType, page]);

  return (
    <>
      {loading ? (
        <Loading>Carregando</Loading>
      ) : (
        <Container>
          <Owner>
            <Link to="/">Voltar aos repositórios</Link>

            <img
              alt={repository.owner.login}
              src={repository.owner.avatar_url}
            />

            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>

          <Filters>
            <Filter
              state={stateType === 'all'}
              onClick={() => setStateType('all')}
            >
              Todas
            </Filter>

            <Filter
              state={stateType === 'open'}
              onClick={() => setStateType('open')}
            >
              Em aberto
            </Filter>

            <Filter
              state={stateType === 'closed'}
              onClick={() => setStateType('closed')}
            >
              Fechadas
            </Filter>
          </Filters>

          <IssueList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />

                <div>
                  <strong>
                    <a
                      target="_blank"
                      href={issue.html_url}
                      rel="noopener noreferrer"
                    >
                      {issue.title}
                    </a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>

                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>

          <Actions>
            <Button pages={page - 1} onClick={() => setPage(page - 1)}>
              Página Anterior
            </Button>

            <Button pages={issues.length} onClick={() => setPage(page + 1)}>
              Próxima Página
            </Button>
          </Actions>
        </Container>
      )}
    </>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
