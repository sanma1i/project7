import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
    return (
        <header>
            <h1 > Just relax... </h1>
            <SearchForm
                onSearch={props.onSearch}
                history={props.history} />
            <Nav />
            <hr className="break" />
        </header>
    );
}
export default Header;