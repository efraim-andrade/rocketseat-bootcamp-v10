/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../Components/Container';

import { Loading, Owner, IssueList } from './styles';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepository() {
      setLoading(true);
      const repoName = decodeURIComponent(match.params.repository);

      try {
        const [repoInfo, repoIssues] = await Promise.all([
          await api.get(`/repos/${repoName}`),
          await api.get(`/repos/${repoName}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
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
  }, []);

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

          <IssueList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />

                <div>
                  <strong>
                    <a href={issue.html_url} target="_blank">
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
