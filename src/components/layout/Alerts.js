import React, {useContext} from 'react';
import AlertContext from '../../context/Alert/AlertContext'
import '../../styles/alert.css';

const Alerts = () => {

    const alertContext = useContext(AlertContext);

    return (
    alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
        <div key = {alert.id} className ='alertRed' >
           <i className="fas fa-info-circle" style={{marginRight:10}}/>{alert.msg}
        </div>
    ))
    );
};

export default Alerts;
