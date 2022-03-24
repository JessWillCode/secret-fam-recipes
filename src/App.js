import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import PrivateRoute from '../src/components/PrivateRoute';
import RecipeList from '../src/components/RecipeList';
import CreateAccountForm from '../src/components/CreateAccountForm';
import Logout from './components/Logout';
import Recipe from './components/Recipe';
import Login from './components/Login';


const App = () => {


  return (
    <AppContainer>
     <Switch>
       <PrivateRoute path='/recipes/:id'>
         <Recipe />
       </PrivateRoute>
       
       <PrivateRoute path='/recipes' component={RecipeList} />
       
       <PrivateRoute path='/logout' component={Logout} />
       
       <Route path='/register' component={CreateAccountForm} />
       
       <Route path='/login' component={Login}/>
       
       <Route path='/' />
       <Redirect to='/login' />
     </Switch>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`