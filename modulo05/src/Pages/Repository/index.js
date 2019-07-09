/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Loading } from './styles';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRepository() {
      setLoading(true);
      const repoName = decodeURIComponent(match.params.repository);

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
      setLoading(false);
    }

    fetchRepository();
  });

  return (
    <>
      <div>
        <h1>Repository</h1>
      </div>
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
