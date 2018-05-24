import React from 'react';

const searchBoxUser = ({onClick, name}) => {
    return (
        <li className="link" onClick={onClick}>
            {name}
        </li>
    )
}

export default searchBoxUser;