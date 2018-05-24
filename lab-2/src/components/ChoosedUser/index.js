import React from 'react';

const choosedUser = ({data}) => {
    return (
        <div className="card player-card">
            <header>
                <a className="profile">
                    <img src={data.avatar} alt={data.name}/>
                </a>
            </header>
            <span className="card-header" >
                <span className="card-title">
                    <h3>{data.name}</h3>
                </span>
            </span>
            <span className="card-summary">
                <div>email: {data.email}</div>
                <div>phone: {data.phone}</div>
            </span>
            <span className="card-meta">
                Published: June 18th, 2015
            </span>
        </div>
    )
}

export default choosedUser;