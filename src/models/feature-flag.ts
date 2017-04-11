import axios from 'axios';
import { action, observable } from "mobx";
import * as httpClient from '../services/httpclient';

export interface IFeatureFlagItem {
    id: string;
    version: number;
    enabled: boolean;
}

export class FeatureFlagItem {
    id: string;
    @observable version: number;
    @observable enabled = false;
    constructor(id, enabled = false, version = 0) {
        this.version = version;
        this.id = id;
        this.enabled = enabled;
    }

    public toggle() {
        this.version++;
        this.enabled = !this.enabled;
    }
    public on() {
        this.enabled = true;
    }
    public off() {
        this.enabled = false;
    }
}

export class FeatureFlagStore {
    private serverRequest;
    @observable flags: FeatureFlagItem[] = [];

    public toglleAllOff() {
        this.flags.forEach((item) => { item.off(); });
    }    

    @action public async getFlagsFromServer() {
        var resp = await httpClient.Get<any[]>("/api/featureflags");
        this.flags = resp.map(item => {
            return new FeatureFlagItem(item.id, item.configuration.isEnabled, item.version);
        });
    };

    @action public addFeatureFlag = async (name) => {
        var flag = new FeatureFlagItem(name, false);
        var request = httpClient.Post("/api/featureflags", {
            id: flag.id,
            configuration: { isEnabled: flag.enabled }
        });
        var response = await request;
        this.flags.push(flag);
    }
     
    public async updateFlagsOnServer(flag: FeatureFlagItem) {
        var request = httpClient.Put("/api/featureflags/" + flag.id, {
            id: flag.id,
            version: flag.version,
            configuration: { isEnabled: flag.enabled }
        });
        var response = await request;
    };
}