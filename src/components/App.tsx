import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../state';
import ReposList from './ReposList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for Repositories</h1>
        <ReposList />
      </div>
    </Provider>
  );
};

export default App;
