import React, {PropTypes} from 'react';

import FilterLink from '../filter-link/FilterLink';

function Filter(props) {
    return (
        <div className="todo-filter">
            <FilterLink icon="list"
                        active={props.activeFilter === 'ALL'}
                        onClick={() => props.onSetFilter('ALL')}>
            </FilterLink>
            <FilterLink icon="check_box"
                        active={props.activeFilter === 'COMPLETED'}
                        onClick={() => props.onSetFilter('COMPLETED')}>
            </FilterLink>
            <FilterLink icon="check_box_outline_blank"
                        active={props.activeFilter === 'UNCOMPLETED'}
                        onClick={props.onSetFilter('UNCOMPLETED')}/>
        </div>
    );
}

Filter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onSetFilter: PropTypes.func.isRequired
};