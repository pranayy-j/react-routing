import {Route, Routes} from 'react-router-dom';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import AllMeetupsPage from './pages/AllMeetups';
import Layout from './components/layouts/Layout';
function App() {
  return (
    <Layout>
    <Routes>
      <Route path = '/' element={<AllMeetupsPage/>}> </Route>
      <Route path = '/new-meetups' element={<NewMeetupsPage/>}></Route>
      <Route path = '/favourites' element={<FavouritesPage/>}></Route>
    </Routes>
    </Layout>
  );
}

export default App;