import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../store/actions/github';

const Repo = props => {
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
  const [isFavourite, setFavourite] = useState(props.isFavourite);

  const onButtonClick = () => {
    const {
      onRemoveFromFavourites,
      onAddToFavourites
    } = props;
    if (isFavourite) {
      const filtered = props.favouriteRepos.filter((repo) => repo.id !== id);
      localStorage.setItem('favouriteRepos', JSON.stringify(filtered));
      onRemoveFromFavourites(id);
    } else {
      const favouriteReposCopy = [...props.favouriteRepos];
      favouriteReposCopy.push({id})
      localStorage.setItem('favouriteRepos', JSON.stringify(favouriteReposCopy));
      onAddToFavourites({id});
    };
    setFavourite(!isFavourite);
  }

  return (
    <div key={id}>
      <p>{name}</p>
      <span>{description}</span>
      <a href={downloads_url}>{full_name}</a><br/>
      <p>{language}</p>
      <span>stars - {stargazers_count}</span>  
      <span>watchers - {watchers_count}</span>  
      <span>forks - {forks_count}</span>
      <button onClick={onButtonClick}>{isFavourite ? '-' : '+'}</button>
      <hr/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
      favouriteRepos: state.github.favouriteRepos
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onAddToFavourites: (repo) => dispatch(addToFavourites([repo])),
      onRemoveFromFavourites: (id) => dispatch(removeFromFavourites(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
