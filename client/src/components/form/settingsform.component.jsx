import React from 'react';

import './form.styles.scss';

const Settings = ( {handleChange, label, ...otherProps} ) => (
   <div className = "group-edit">
         <label className = "form-label-edit"> 
            {label}
         </label>
      <input className="form-input-edit" onChange = {handleChange} {...otherProps}/>
   </div>
)

export default Settings;