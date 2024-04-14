import './styles/index.css';
import DrinkSetupPage from './pages/DrinkSetupPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import CollectionPage from 'pages/CollectionPage';
import MainHeader from 'components/MainHeader';
import Footer from 'components/Footer';
import { DynamicHeaderContextProvider } from 'state/DynamicHeaderContext';
import { DrinkCreationContextProvider } from 'state/DrinkCreationContext';
import { CollectionsContextProvider } from 'state/CollectionContext';
import DrinkPage from 'pages/DrinkPage';
import Page404 from 'pages/Page404';


function App() {
  return (
    <BrowserRouter>
      <CollectionsContextProvider>
        <DrinkCreationContextProvider>
          <NavMenu />
          <DynamicHeaderContextProvider>
            <Routes>
              <Route path='/' element={<MainHeader />}>
                <Route index element={<Home />} />
                <Route path='collection/:id' element={<CollectionPage/>} />
              </Route>
              <Route path='new_drink' element={<DrinkSetupPage />} />
              <Route path='drink/:collectionId/:drinkId' element={<DrinkPage />}/>
              <Route path="*" element={<Page404/>}></Route>
            </Routes>
          </DynamicHeaderContextProvider>
        </DrinkCreationContextProvider>
      </CollectionsContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
