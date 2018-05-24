import React, { Component } from 'react';
import SearchBoxUser from './components/SearchBoxUser';
import ChoosedUser from './components/ChoosedUser';
import users from './data/users.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchBoxUsers: users,
            user: {},
            isUserChoosed: false,
        }
    }

    handleUserClick(user,event) {
        this.setState({user: user});
        this.setState({isUserChoosed: true});
    }

    render() {
        const choosedUser = this.state.isUserChoosed && <ChoosedUser data={this.state.user} />
        console.log(this.state.user);
        console.log(this.state.isUserChoosed);
      return (
        <div className="container">
            <h1>Address Book</h1>
            <div className="cards">
                <div className="card">
                    <span className="card-summary">
                        <input type="text" placeholder="Filter..."  />
                    </span>
                    <span className="card-summary">
                        <ul>
                            {this.state.searchBoxUsers.map(user => (
                                <SearchBoxUser 
                                    key={user.id} 
                                    name={user.name} 
                                    onClick={e => this.handleUserClick(user,e)}
                                />
                            ))}
                        </ul>
                    </span>
                </div>
                
                {choosedUser}

            </div>
        </div>
      );
    }
}

export default App;