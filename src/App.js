import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/shop/sign-in-and-sign-up/sign-in-and-sign-up.component';

import CheckOutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component'

import {auth, 
      createUserProfileDocument, 
      // addCollectionAndDocuments
    } from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

// import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

// function App() {
class App extends React.Component{
  

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(async snapShot => {
          
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         });

    //     });

    //   }
    //   else{
    //     setCurrentUser(userAuth);
    //   }
    // });


  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  // [match, location, history]
  render(){
    return (
      <div>
          <Header />
          <Switch>
            <Route exact path = '/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckOutPage}/>
            <Route exact path='/signin' render={()=> 
              this.props.currentUser ? 
              (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}
            />
          </Switch>
      </div>
    );
  }
  
}

// const mapStateToProp = ({user}) => ({
//   currentUser : user.currentUser
// });


const mapStateToProp = createStructuredSelector({
  currentUser : selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
  )(App);
