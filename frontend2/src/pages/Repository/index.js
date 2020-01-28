import React from 'react';

export default function REpository({ match }) {
return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}