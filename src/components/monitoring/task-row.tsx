import * as Models from "../../models/index"
import axios from 'axios';
import * as React from 'react';
import { action, observable } from "mobx";
import { observer } from 'mobx-react';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

export interface TaskRowProps {
    task: Models.TaskItem;
}

@observer export class TaskRow extends React.Component<TaskRowProps, {}> {
    public render() {
        return (
            <tr role="row" >
                <td className="sorting_1">{this.props.task.taskId}</td>
                <td>{this.props.task.isRunning ? 'Running' : 'Not running'}</td>
            </tr>
        )
    }
}