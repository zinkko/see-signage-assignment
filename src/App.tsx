import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import { CreateList } from './components/CreateList';
import { EditList } from './components/EditList';
import { Home } from './components/Home';
import { Page } from './PageEnum';

const getPageComponent = (page: Page, setPage: React.Dispatch<React.SetStateAction<Page>>) => {
  switch (page) {
    case Page.Home: return <Home setPage={setPage} />;
    case Page.Create: return <CreateList />;
    case Page.Edit: return <EditList />;
  }
}

function App() {
  const [page, setPage] = useState(Page.Home);

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>
            Management UI
          </p>
        </header>
        <div>
        </div>
      </div>
      {getPageComponent(page, setPage)}
    </ChakraProvider>
  );
}

export default App;
