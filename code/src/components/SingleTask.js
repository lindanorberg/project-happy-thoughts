// THIS COMPONENT IS NOT USED AT THE MOMENT
import React, { useState } from 'react';

export const SingleTask = ({ description, checked }) => {
  console.log('Desc: {description}')
  const [singleTaskChecked, setSingleTaskChecked] = useState(checked);
  const onSingleTaskCheckboxChange = () => {
    setSingleTaskChecked(!singleTaskChecked);
    // Send an API call to ad to the heart count
  }

  if (description || checked === undefined) {
    return (
      <p>NO DATA</p>
    )
  }
  return (
    <div>
      <h4>h4</h4>
      <p>{description}</p>
      <input type="checkbox" checked={singleTaskChecked} onChange={onSingleTaskCheckboxChange} />
    </div>
  )
}