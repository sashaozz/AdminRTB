import * as React from 'react';
import * as RB from 'react-bootstrap';
import * as OZ from '../';
import * as Models from "../../models"
import { action, observable } from "mobx";
import { observer } from 'mobx-react';

interface Props {
}
interface State {
}

@observer export class Nodes extends React.Component<Props, State> {
    private nodeStore = new Models.MonitoringStore();

    componentDidMount() {
        this.nodeStore.getNodesFromServer();
    }
    componentWillUnmount() {
    }

    public render() {
        return (
            <div>
                <div className="box-body">
                    <ul className="todo-list">
                        {this.nodeStore.nodes.map(f => <OZ.NodeRow node={f} key={f.nodeId} />)}
                    </ul>
                </div>
            </div>
        )
    }
}