import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventEmitter from 'events';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import { Seq } from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { Motion, spring } from 'react-motion';

import TabContent from './TabContent.jsx';
import TabNav from './TabNav.jsx';

import styles from './app.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class TabsComponent extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        // 默认激活索引，组件内更新
        defaultActiveIndex: PropTypes.number,
        // 默认激活索引，组件外更新
        activeIndex: PropTypes.number,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {},
    };

    constructor(props) {
        super(props);

        const currProps = this.props;
        this.handleTabClick = this.handleTabClick.bind(this);
        this.immChildren = Seq(currProps.children); // todo

        let activeIndex;

        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex,
            });
        }
    }

    handleTabClick(activeIndex) {
        const prevIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex
            && 'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex,
            });

            this.props.onChange({ activeIndex, prevIndex });
        }
    }

    renderTabNav() {
        return (
            <TabNav
                key="tabBar"
                onTabClick={this.handleTabClick}
                panels={this.immChildren}
                activeIndex={this.state.activeIndex}
            />
        )
    }

    renderTabContent() {
        return (
            <TabContent
                key="tabContent"
                panels={this.immChildren}
                activeIndex={this.state.activeIndex}
            />
        )
    }

    render() {
        const { className } = this.props;

        const classes = classnames(className, 'ui-tabs'); // todo className 还是 styleName

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }

}

export default TabsComponent;
