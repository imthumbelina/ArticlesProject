import React, { useState, useEffect } from 'react';

const Checkbox = ({ onClick, title = "", checked = false }) => (
    <label>
      <input
        onChange={e => onClick(e.target.checked)}
        type="checkbox"
        checked={checked}
      />
      {title}
    </label>
  );
  
export default Checkbox;
