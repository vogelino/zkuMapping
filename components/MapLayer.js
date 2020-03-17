import PropTypes from 'prop-types';
import React from 'react';

const MapLayer = ({
	id,
	active,
	zIndex,
	path,
}) => (
	<div
		className={`map-layer ${active ? 'active' : ''}`}
		id={`map-layer-${id}`}
		style={{
			zIndex,
			backgroundImage: `url(/${path})`,
		}}
	/>
);

MapLayer.propTypes = {
	id: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	zIndex: PropTypes.number.isRequired,
};

export default MapLayer;
