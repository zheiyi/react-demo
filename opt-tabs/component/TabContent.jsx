import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventEmitter from 'events';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import { Seq } from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { Motion, spring } from 'react-motion';

import styles from './app.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true})
class TabContent extends Component {

    static propTypes = {
        panels:  PropTypes.object,
        activeIndex: PropTypes.number,
    };

    getTabPanes() {
        const { activeIndex, panels } = this.props;

        return panels.map((child) => {
            if (!child) {
                return;
            }
            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;

            return React.cloneElement(child, {
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`,
            });
        });
    }

    render() {
        const classes = classnames({
            'content': true,
        });

        return (
            <div styleName={classes}>
                {this.getTabPanes()}
            </div>
        );
    }

}

export default TabContent;
