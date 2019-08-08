import React, { Component } from 'react';

//import './App.css';
import apiKey from './components/config.js';
import axios from 'axios';
import Nav from './components/Nav.js';
import Photos from './component/Photos.js';
import NotFound from './components/NotFound.js';
import SearchForm from './components/SearchForm.js'


import {
  BrowserRouter,
  Route,
  Switch
}
  from 'react-router-dom';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }


  componentDidMount() {
    this.performSearch()

  }


  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo, isLoaded: true

        });
      })
      /*If the server is off line or if there are any errors loading the page*/
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSerach} />
          <Nav istrue={this.isTrue} onClick={this.performSearch} />
          {
            (this.state.loading)
              ? <h3>Loading...</h3>
              :
              <Switch>
                <Route exact path="/" render={() => <Photos title="Photos" data={this.state.imgs} />} />
                <Route path="/sunsets" render={() => <Photos title="Sunsets" data={this.state.imgs} />} />
                <Route path="/waterfalls" render={() => <Photos title="Waterfalls" data={this.state.imgs} />} />
                <Route path="/raindows" render={() => <Photos title="Rainbows" data={this.state.imgs} />} />
                <Route path="/:query" render={({ match }) => <Photos testtt={match} search={this.performSearch(match.params.query)} title={match.params.query.toUpperCase()} data={this.state.imgs} />} />
                <Route component={NotFound} />
              </Switch>
          }
        </div>
      </BrowserRouter >
    );
  }
}






