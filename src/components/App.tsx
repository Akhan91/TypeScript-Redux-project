import { Provider } from 'react-redux';
import { store } from '../state';
import ReposList from './ReposList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <h1 className="mainTitle">Search for libraries</h1>
        <ReposList />
      </div>
    </Provider>
  );
};

export default App;
