
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
@CSSModules(styles, { allowMultiple: true})
class InkBar extends Component {
	static propTypes = {
		left: PropTypes.number,
		width: PropTypes.number,
	};

	render() {
		const { left, width } = this.props;
		const classes = classnames({
			inkBar: true,
		});

		return (
			<div styleName={classes} style={{
				WebkitTransform: `translate3d(${left}px, 0, 0)`,
				transform: `translate3d(${left}px, 0, 0)`,
				width: width,
			}}>
			</div>
		);
	}
}

export default InkBar;
