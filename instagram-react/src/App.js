import React, { Component } from 'react';
import request from 'superagent';

import Header from './components/Header';
import Tiles from './components/Tiles';

import Api from './Api';
const api = new Api();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      user: [],
      isUserLoaded: false,
      isPhotosLoaded: false,
      max_id: '',
    }
    // привязка, чтобы сделать this доступным в коллбэке
    this.fetchPhotos = this.fetchPhotos.bind(this);
  }

  componentWillMount() {
    this.fetchPhotos();
    this.fetchUser();
  }

  fetchUser() {
    api.fetchUser()
    .then((res) => {
      this.setState({
        user: res.body.data,
        isUserLoaded: true
      })
    })
  }

  fetchPhotos() {
    api.fetchPhotos(this.state.max_id)
      .then((res) => {
        this.setState({
          photos: [...this.state.photos, ...res.body.data],
          isPhotosLoaded: true,
          max_id: res.body.pagination.next_max_id,
        })
      })
  }

  render() {
    const header = this.state.isUserLoaded && <Header data={this.state.user} />
    const tiles  = this.state.isPhotosLoaded && <Tiles data={this.state.photos} />
    return (
      <div id="wrapper">
        {header}
        <hr />
        <div id="main">
          <div className="inner">
            {tiles}
          <div className="row" style={{marginTop:"3em"}}>
            <ul className="actions">
              <li>
                <button href="#" onClick={this.fetchPhotos} className="button special icon fa-download">Загрузить ещё</button>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;