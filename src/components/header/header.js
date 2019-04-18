import React from 'react';
import headerStyles from '../../css/header.css';

export default class Header extends React.Component {

    render() {
        return ( <
            div >
            <
            nav className = {
                headerStyles.nav_bar
            } >
            <
            ul className = {
                headerStyles.nav_left
            } >
            <
            li >
            PayStub Calculator <
            /li> < /
            ul > <
            ul className = {
                headerStyles.nav_right
            } >
            <
            li >
            <
            span > Based on your inputs <
            /span> < /
            li > <
            /ul> < /
            nav > <
            /div>
        )
    }
}