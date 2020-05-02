import React from 'react';

const repo = props => {
  const {
    id, 
    name, 
    description,
    downloads_url,
    forks_count,
    full_name,
    language,
    stargazers_count,
    watchers_count
  } = props.repoData;
  return (
    <div key={id}>
      <p>{name}</p>
      <span>{description}</span>
      <a href={downloads_url}>{full_name}</a><br/>
      <p>{language}</p>
      <span>stars - {stargazers_count}</span>  
      <span>watchers - {watchers_count}</span>  
      <span>forks - {forks_count}</span>
      <hr/>
    </div>
  )
}

export default repo;
