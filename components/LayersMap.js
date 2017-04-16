import PropTypes from 'prop-types';
import React from 'react';
import MapLayer from './MapLayer';

const LayersMap = ({ layers }) => (
	<article className="map-container">
		<div className="map-background" />
		{layers.map((layer, index) => (
			<MapLayer
				key={layer.id}
				{...layer}
				zIndex={index + 2}
			/>
		))}
	</article>
);

LayersMap.propTypes = {
	layers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default LayersMap;
