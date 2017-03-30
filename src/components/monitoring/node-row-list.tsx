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
            <table id="example2" className="table table-bordered table-hover dataTable" role="grid">
                <thead>
                    <tr role="row">
                        <th className="sorting_asc" tabindex="0" >Machine Name</th>
                        <th className="sorting" tabindex="0" >Node Id</th>
                        <th className="sorting" tabindex="0" >Active processes count</th>
                     </tr>
                </thead>
                <tbody>
                    {this.nodeStore.nodes.map(f => <OZ.NodeRow node={f} key={f.nodeId} />)}
                </tbody>
            </table>
        )
    }
}