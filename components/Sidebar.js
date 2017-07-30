import PropTypes from 'prop-types';
import React from 'react';
import SidebarOption from './SidebarOption';

const Sidebar = ({ layers, onLayerToggle }) => (
	<aside className="sidebar">
		<ul className="sidebar-options">
			{layers.map((layer) => (
				<SidebarOption
					key={layer.id}
					onChange={(id) => onLayerToggle(id)}
					{...layer}
				/>
			))}
		</ul>
	</aside>
);

Sidebar.propTypes = {
	layers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onLayerToggle: PropTypes.func.isRequired,
};

export default Sidebar;
