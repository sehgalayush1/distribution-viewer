import React from 'react';


export default function DatasetDatestamp(props) {
  return (
    <span className="dataset-datestamp">
      <time dateTime={props.isoDate}>{props.isoDate}</time>
    </span>
  );
}
