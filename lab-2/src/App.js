import React, { Component } from 'react';
//import request from 'superagent';

class App extends Component {
    render() {
      return (
        <div className="container">
            <div className="cards">
                <div className="card">
                    <span className="card-summary">
                        <input type="text" placeholder="Filter..." />
                    </span>
                    <span className="card-summary">
                        jkjkjkkj
                    </span>
                </div>
                <div className="card player-card">
                    <header>
                        <a class="profile">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/rhmGrZQv.jpg" alt="Profile Image"/>
                        </a>
                    </header>
                    <span className="card-header" >
                        <span className="card-title">
                            <h3>This is a title for a card</h3>
                        </span>
                    </span>
                    <span className="card-summary">
                        Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards height will expand to match the longest item.
                        Using Flexbox is such a an easy, well supported way for grid-style content, such as cards. The cards height will expand to match the longest item.
                    </span>
                    <span className="card-meta">
                        Published: June 18th, 2015
                    </span>
                </div>
            </div>
        </div>
      );
    }
}

export default App;