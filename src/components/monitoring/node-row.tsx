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
            <li>
                <span className="text">{this.props.node.machineName}</span>
                <span className="text">{this.props.node.nodeId}</span>
                <span className="text">{this.props.node.backgroundTasks.length}</span>
            </li>
        )
    }
}