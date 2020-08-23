import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';



class ShopPage extends React.Component{
  
  componentDidMount(){
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // fetchCollectionsAsync();
  
  };

    // fetch('https://firestore.googleapis.com/v1/projects/the-wardrobe-db-bbdb6/databases/(default)/documents/collections')
    //   .then(res => res.json())
    //   .then(collections => console.log(collections))


    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // })


  render(){
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer} 
          
        />
      </div>
    )
  }
}

const mapDispatchToProp = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProp)(ShopPage);