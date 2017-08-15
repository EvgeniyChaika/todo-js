import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/header/Header';

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;