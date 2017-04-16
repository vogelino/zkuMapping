import React, { Component } from 'react';
import Head from 'next/dist/lib/head';
import layers from '../state/layers';
import Sidebar from '../components/Sidebar';
import LayersMap from '../components/LayersMap';

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
		const { layers: layersArray } = this.state;
		return (
			<div className="main-container">
				<Head>
					<link rel="stylesheet" media="all" href="/static/styles.css" />
				</Head>
				<Sidebar
					layers={layersArray}
					onLayerToggle={(layerId) => this.toggleLayer(layerId)}
				/>
				<LayersMap layers={layersArray} />
			</div>
		);
	}
}

export default Home;
