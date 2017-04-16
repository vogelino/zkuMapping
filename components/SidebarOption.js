import PropTypes from 'prop-types';
import React from 'react';

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
		id={`sidebar-option-${id}`}
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

export default SidebarOption;
