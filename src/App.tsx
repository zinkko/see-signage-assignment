import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import { CreateList } from './components/CreateList';
import { EditList } from './components/EditList';
import { Home } from './components/Home';
import { Page } from './PageEnum';

const getPageComponent = (page: PageData, setPage: React.Dispatch<React.SetStateAction<PageData>>) => {
  switch (page.page) {
    case Page.Home: return <Home setPage={setPage} />;
    case Page.Create: return <CreateList setPage={setPage} />;
    case Page.Edit: return <EditList name={page.props?.name} setPage={setPage} />;
  }
}

export interface PageData {
  page: Page,
  props?: any,
}

function App() {
  const [page, setPage] = useState<PageData>({ page: Page.Home });

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
