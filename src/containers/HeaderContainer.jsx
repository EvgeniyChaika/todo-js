import React, {PropTypes} from 'react';
import Header from "../components/header/Header";


export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const tasks = this.props.store.getState();
        return (
            <Header tasks={tasks} title={this.props.title}/>
        );
    }
}

HeaderContainer.propTypes = {
    store: PropTypes.object.isRequired
};