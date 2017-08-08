import React, {PropTypes} from 'react';

export default function Stats(props) {
    let total = props.tasks.length;
    let completed = props.tasks.filter(task => task.completed).length;
    let notCompleted = total - completed;
    return (
        <table>
            <tbody>
            <tr>
                <th>All tasks:</th>
                <td>{total}</td>
            </tr>
            <tr>
                <th>Completed:</th>
                <td>{completed}</td>
            </tr>
            <tr>
                <th>Left:</th>
                <td>{notCompleted}</td>
            </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }
    )).isRequired
};