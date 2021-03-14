import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({tech, getTechs}) => {
    const {techs, loading} = tech;

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.length === 0 ? (<p className="center">No Technician to show</p>) : (
                        techs.map(tech => <TechItem tech={tech} key={tech.id} />)
                    )}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    tech: state.tech
});
export default connect(mapStateToProps, {getTechs})(TechListModal);
