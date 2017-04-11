import * as React from 'react';
import * as RB from 'react-bootstrap';
import * as Modal from 'react-modal-bootstrap';
import * as OZ from '../';
import { action, observable } from "mobx";
import { observer } from 'mobx-react';
import * as httpClient from '../../services/httpclient';

@observer export class LoginPopup extends React.Component<{}, {}> {
    @observable isOpened = false;
    @observable login = "";
    @observable password = "";

    @action.bound public togglePopup() {
        this.isOpened = !this.isOpened;
    }

    @action.bound public async auth() {
        var status = await httpClient.Post<Boolean>('/api/auth/login',
            {
                login: this.login,
                password: this.password
            });

        if (status)
            window.location.reload();
        else {
            alert('invalid credentials!');
            this.login = '';
            this.password = '';
        }
    }

    public render() {
        return (
            <Modal.Modal isOpen={this.isOpened} onRequestHide={this.togglePopup}>
                <Modal.ModalBody>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="../../index2.html" method="post">
                            <div className="form-group has-feedback">
                                <OZ.FieldGroup
                                    id="email"
                                    type="text"
                                    value={this.login}
                                    label="Login"
                                    placeholder="Enter login"
                                    onChange={(x) => { this.login = x.target.value }}
                                />
                            </div>
                            <div className="form-group has-feedback">
                                <OZ.FieldGroup
                                    id="password"
                                    type="password"
                                    value={this.password}
                                    label="Password"
                                    placeholder="Enter password"
                                    onChange={(x) => { this.password = x.target.value }}
                                />
                            </div>
                        </form>                      
                    </div>
                </Modal.ModalBody>
                <Modal.ModalFooter>
                    <RB.Button bsStyle="default" onClick={this.auth}>Sign In</RB.Button>
                </Modal.ModalFooter>
            </Modal.Modal>
        );
    }
}