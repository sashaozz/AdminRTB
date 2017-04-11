import axios from 'axios';
import { action, observable } from "mobx";
import * as httpClient from '../services/httpclient';

export interface INodeInfo {
    nodeId: string;
    machineName: string;
    backgroundTasks: ITaskInfo[];
}

export interface ITaskInfo {
    taskId: string;
    isRunning: boolean;
}

export class TaskItem {
    public taskId: string;
    public isRunning: boolean;

    constructor(taskId: string, isRunning: boolean) {
        this.taskId = taskId;
        this.isRunning = isRunning;
    }
}

export class NodeItem {
    public nodeId: string;
    public machineName: string;
    public backgroundTasks: TaskItem[];

    constructor(nodeId: string, machineName: string, tasks: ITaskInfo[]) {
        this.nodeId = nodeId;
        this.machineName = machineName;
        this.backgroundTasks = tasks.map(t => new TaskItem(t.taskId, t.isRunning));
    }
}

export class MonitoringStore {
    private serverRequest;

    @observable nodes: NodeItem[] = [];

    @action public async getNodesFromServer() {
        var nodes = await httpClient.Get<INodeInfo[]>('/api/monitoring/nodes');
        
        this.nodes = nodes.map(item => {
            return new NodeItem(item.nodeId, item.machineName, item.backgroundTasks);
        });
    };

    @action public async stopProcess(nodeId: string, processId: string) {
        await httpClient.Post('/api/monitoring/StopProcess', {
            NodeId: nodeId,
            ProcessId: processId
        });
    };

    @action public async startProcess(nodeId: string, processId: string) {
        await httpClient.Post('/api/monitoring/StartProcess', {
            NodeId: nodeId,
            ProcessId: processId
        });
    };
}