import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/presentational/Header';
import WorkThumbnail from '../components/presentational/WorkThumbnail';
import page from '../redux/PageWrapper';
import { normalizeWork } from '../utils/apiUtil/elemenoParser';


const WorksPage = ({ works }) => (
	<div className="home-page">
		<Header />
		<ul>
			{works.map((work) =>
				<WorkThumbnail key={work.slug} {...work} />)}
		</ul>
	</div>
);

WorksPage.propTypes = {
	works: PropTypes.arrayOf(PropTypes.shape(WorkThumbnail.propTypes)).isRequired,
};

const preloadFunction = (Api) =>
	Promise.all([Api.getWorks(), Api.getIntroductionText()])
		.then(([works, introductionText]) => ({ works, introductionText }));

const shouldLoadData = ({ works, introductionText }) =>
	Object.keys(introductionText).length === 0 || works.length === 0;

const mapStateToProps = ({ works, introductionText }) => ({
	works: works.map(normalizeWork),
	introductionText,
});
const connectedPage = connect(mapStateToProps)(WorksPage);
export default page(connectedPage, preloadFunction, shouldLoadData);

