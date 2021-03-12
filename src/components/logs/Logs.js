import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = ({log, getLogs}) => {
    const {logs, loading} = log;

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    if(loading || logs === null){
        return <Preloader/>
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs to show</p>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
});
export default connect(
    mapStateToProps, { getLogs })(Logs)
