import React from 'react';
import styles from './MaintenanceToggle.module.scss';

const maintenanceToggle = props => {

return(
  <div className={styles["maintenance-mode"]}>
    <label>
    Maintenance Mode
    <input type="radio" />
    </label>
  </div>
);

}

export default maintenanceToggle;
