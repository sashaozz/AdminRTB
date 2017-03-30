import * as Models from "../../models/index"
import axios from 'axios';
import * as React from 'react';
import { action, observable } from "mobx";
import {observer} from 'mobx-react';
import ReactBootstrapToggle from 'react-bootstrap-toggle';

export interface NodeRowProps {
    node: Models.NodeItem;
}

@observer export class NodeRow extends React.Component<NodeRowProps, {}> {
    public render() {
        return (
            <tr role="row" >
                <td className="sorting_1">{this.props.node.machineName}</td>
                <td>{this.props.node.nodeId}</td>
                <td>{this.props.node.backgroundTasks.length}</td>
            </tr>
        )
    }
}