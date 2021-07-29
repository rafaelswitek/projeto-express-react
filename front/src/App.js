import Menu from './components/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHome from './pages/PageHome';
import Page404 from './pages/Page404';
import PagePosts from './pages/PagePosts';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/'>
          <PageHome />
        </Route>
        <Route path='/user/:id/posts'>
          <PagePosts />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
