import React, { Component } from 'react';
import './index.css';
import apiKey from './components/config.js';
import axios from 'axios';
import Nav from './components/Nav.js';
import Gallery from './components/Photos.js';
import NotFound from './components/NotFound.js';
import SearchForm from './components/SearchForm.js';


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
      sunsets: [],
      waterfalls: [],
      rainbows: [],
      // buttonSearch: [],
      isLoading: [],
    }
  }


  componentDidMount() {
    this.setState({
      isLoading: false

    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&extras=url_o&per_page=24&page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          sunsets: response.data.results,
          isLoading: true

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
          <SearchForm onSearch={this.performSearch} />
          <Nav istrue={this.isTrue} onClick={this.performSearch} />
          {
            //(this.state.loading)
            //? <h3>Loading...</h3>
            //:
            <Switch>
              <Route exact path="/" render={(props) => <Gallery {...props} title="Sunsets" data={this.state.sunsets} />} />
              <Route path="/sunsets" render={(props) => <Gallery {...props} title="Sunsets" data={this.state.sunsets} />} />
              <Route path="/waterfalls" render={(props) => <Gallery {...props} title="Waterfalls" data={this.state.waterfalls} />} />
              <Route path="/rainbows" render={(props) => <Gallery {...props} title="Rainbows" data={this.state.rainbows} />} />
              {/* <Route path="/:query" render={({ match }) => <Gallery test={match} search={this.performSearch(match.params.query)} title={match.params.query.toUpperCase()} data={this.state.buttonSearch} />} /> */}
              <Route component={NotFound} />
            </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}






