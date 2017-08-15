import React, {PropTypes} from 'react';
import Header from "../components/header/Header";


export default class HeaderContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = this.context.store;
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const tasks = this.context.store.getState();
        return (
            <Header tasks={tasks} title={this.props.title}/>
        );
    }
}

HeaderContainer.contextTypes = {
    store: PropTypes.object
};

HeaderContainer.propTypes = {
    title: PropTypes.string.isRequired
};