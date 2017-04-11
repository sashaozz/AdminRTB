import * as React from 'react';
import * as RB from 'react-bootstrap';
import * as Modal from 'react-modal-bootstrap';
import * as OZ from '../';
import { action, observable } from "mobx";
import { observer } from 'mobx-react';

export var LoginPopupInstance: OZ.LoginPopup;
 
@observer export class PopupManager extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <OZ.LoginPopup ref={(popup) => { LoginPopupInstance = popup; }} />
            </div>
        );
    }
}