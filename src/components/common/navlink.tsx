import * as React from 'react';
import * as Router from 'react-router';

export class NavLink extends React.Component<any, any> {
    context: any

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    public render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "active" : "";
        return (
            <li className={className}>
                <Router.Link {...this.props} />
            </li>
        )
    }
}