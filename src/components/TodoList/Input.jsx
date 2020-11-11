import React, { forwardRef } from 'react';


export const Input = forwardRef( ({ placeholder }, ref ) => {    
    return(
      <label>
        <input ref={ref} type="text" placeholder={ placeholder } />
      </label>
    )
  }
)