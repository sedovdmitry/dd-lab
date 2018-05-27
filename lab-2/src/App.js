import React, { Component } from 'react';
import SearchBoxUser from './components/SearchBoxUser';
import ChoosedUser from './components/ChoosedUser';
import users from './data/users.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            isUserChoosed: false,
            search: '',
        }
    }

    handleUserClick(user,event) {
        this.setState({user: user});
        this.setState({isUserChoosed: true});
    }

    updateSearch(event) {
        this.setState({
          search: event.target.value
        })
    }

    render() {
        const choosedUser = this.state.isUserChoosed && <ChoosedUser data={this.state.user} />
        const filteredUsers = users.filter(
            (user) => {
                let searchingByFields = '';
                let searchStateWithoutField = this.state.search.replace(/.*:/i,'');
                if (this.state.search.indexOf(':') !== -1) {
                    const field = this.state.search.replace(/:.*/i,'');
                    searchingByFields = user[field].toLowerCase();
                } else {
                    searchingByFields = user.name.toLowerCase()
                                      + user.email.toLowerCase()
                                      + user.phone.toLowerCase();
                }
                return searchingByFields.indexOf(
                    searchStateWithoutField.toLowerCase()) !== -1;
            }
        )
      return (
        <div className="container">
            <h1>Address Book</h1>
            <div className="cards">
                <div className="card">
                    <span className="card-summary">
                        <input type="text"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                            placeholder="Filter..."  
                        />
                    </span>
                    <div className="card-summary">
                        Search by default for all fields.<br/>
                        Type 'name:', 'email:' or 'phone:' to filter by this value.
                    </div>
                    <span className="card-summary">
                        <ul>
                            {filteredUsers.map(user => (
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