import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import './ReposList.css';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepos } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term);
  };

  return (
    <div className="mainContent">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="inputField"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search for a library"
          minLength={2}
        />
        <button className="searchBtn">Search</button>
      </form>
      <div className="searchResults">
        {error && <h3>Sorry there seems to be some kind of error :(</h3>}
        <div className="loadingMessage">{loading && <h3>Loading...</h3>}</div>
        {!error &&
          !loading &&
          data.map((list, index) => (
            <p className="searchHit" key={index}>
              {list}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReposList;
