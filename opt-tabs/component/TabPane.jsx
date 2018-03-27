import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventEmitter from 'events';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import { Seq } from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-minix';
import { Motion, spring } from 'react-motion';

import styles from './app.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class TabPane extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]).isRequired,
        order: PropTypes.string.isRequired,
        disable: PropTypes.bool,
        isActive: PropTypes.bool,
    };

    render() {
        const { className, isActive, children } = this.props;

        const classes =  classnames({
            panel: true,
            contentActive: isActive,
        });

        return (
            <div role="tabpanel"
                 styleName={classes}
                 aria-hidden={!isActive}>
                {children}
            </div>
        );
    }
}

export default TabPane;
