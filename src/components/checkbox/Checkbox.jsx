import React, {PropTypes} from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.initiallyChecked
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({checked: !this.state.checked}, () => console.log(this.state));
    }

    render() {
        return (
            <button className="checkbox icon" onClick={this.handleClick}>
                <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        )
    }
}

Checkbox.propTypes = {
    initiallyChecked: PropTypes.bool.isRequired
};

export default Checkbox;