import {connect} from 'react-redux';

import {setFilter} from '../actions/filter';
import Filter from '../components/filter/Filter';

function mapStateToProps(state) {
    return {
        activeFilter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetFilter: filter => dispatch(setFilter(filter))
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
