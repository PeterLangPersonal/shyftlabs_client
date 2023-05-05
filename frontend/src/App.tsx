import './App.css';
import { Navbar, PageContent } from './components';
import { Success } from './components/notification';
import { PageProvider } from './contexts';

function App() {

  return (
    <PageProvider>
      <div className="App">
        <Navbar/>
        <PageContent/>
        <Success/>
      </div>
    </PageProvider>
  );
}

export default App;
