import React from 'react';
import './MaintenanceToggle.css'

const maintenanceToggle = props => {

return(
  <div className="maintenance-mode">
    <label>
    Maintenance Mode
    <input type="radio" />
    </label>
  </div>
);

}

export default maintenanceToggle;
