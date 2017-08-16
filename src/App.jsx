import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderContainer from './containers/HeaderContainer';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';
import FilterContainer from './containers/FilterContainer';

export default function App() {
    return (
        <main>
            <HeaderContainer/>
            <FilterContainer/>
            <ReactCSSTransitionGroup component="section"
                                     className="todo-list"
                                     transitionName="slide"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
                <ListContainer/>
            </ReactCSSTransitionGroup>
            <FormContainer/>
        </main>
    );
}
