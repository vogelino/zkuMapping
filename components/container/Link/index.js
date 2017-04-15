import React, { PropTypes } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLoading } from '../../../redux/actions/loading';

const CustomLink = ({
	startLoading: load,
	href,
	className,
	children,
	...rest
}) => {
	Router.onRouteChangeStart = load;
	const baseProps = {
		...rest,
		className: `link ${className}`,
	};
	const targetProps = {
		target: '_blank',
		rel: 'noopener noreferrer',
	};
	const linkProps = !href.startsWith('/') ?
		{ ...baseProps, ...targetProps } : baseProps;

	return (
		<Link href={href}>
			<a {...linkProps}>{children}</a>
		</Link>
	);
};

CustomLink.defaultProps = {
	children: '',
	className: '',
};

CustomLink.propTypes = {
	startLoading: PropTypes.func.isRequired,
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ startLoading }, dispatch);

export default connect(null, mapDispatchToProps)(CustomLink);
