import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Globals from '../../Globals';
import * as ls from '../../localStorage';

import Error from '../Error';
import './Clans.css';
import SearchPlayer from '../SearchPlayer';


class Clans extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    }

    this.playerSelect = this.playerSelect.bind(this);    
  }

  playerSelect = (e) => {
    ls.update("profileHistory", e.currentTarget.dataset, true, 6);
    
    this.setState({
      membershipType: e.currentTarget.dataset.membershiptype,
      membershipiId: e.currentTarget.dataset.membershipid
    })
  }

  render() {
    
    if (this.state.ProfileResponse) {
      return (
        <BrowserRouter>
          <Switch>
            <Route 
              path="/clans/:groupId" 
              render={ (route) => 
                <div className="view" id="clans">
                  groupId
                </div>
              } />
            <Route 
              path="/clans" 
              render={ (route) => 
                <SearchPlayer route={route} playerSelect={this.playerSelect} />
              } />
            <Route render={ (route) => <Error /> } />
          </Switch>
        </BrowserRouter>
      )
    }
    else {
      return (
        <BrowserRouter>
          <Switch>
            <Route 
              path="/clans" 
              exact
              render={ (route) => 
                <SearchPlayer route={route} playerSelect={this.playerSelect} />
              } />
            <Route render={ (route) => <Error /> } />
          </Switch>
        </BrowserRouter>
      )
    }
  }
}

export default Clans;