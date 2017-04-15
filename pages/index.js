import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Head from 'next/dist/lib/head';
import layers from '../state/layers';

const SidebarOption = ({
	id,
	title,
	active,
	description,
	color,
	onChange,
}) => (
	<li
		className={`sidebar-option ${active ? 'active' : ''}`}
		id={id}
		style={{ '--optioncolor': color }}
		onClick={() => onChange(id)}
		role="checkbox"
		aria-checked={active}
	>
		<h5 className="sidebar-option-title">{title}</h5>
		<p className="sidebar-option-description">{description}</p>
	</li>
);

SidebarOption.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	description: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = { layers };
	}
	toggleLayer(toggleId) {
		this.setState({
			layers: this.state.layers.map((layer) => ({
				...layer,
				active: layer.id === toggleId ? !layer.active : layer.active,
			})),
		});
	}
	render() {
		return (
			<div className="main-container">
				<Head>
					<link rel="stylesheet" media="all" href="/static/styles.css" />
				</Head>
				<aside className="sidebar">
					<h3 className="sidebar-title">ZK/U Mapping</h3>
					<ul className="sidebar-options">
						{this.state.layers.map((layer) => (
							<SidebarOption
								key={layer.id}
								onChange={(id) => this.toggleLayer(id)}
								{...layer}
							/>
						))}
					</ul>
				</aside>
			</div>
		);
	}
}

export default Home;
