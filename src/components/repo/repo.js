import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../store/actions/github';
import { Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { Star, Plus } from '@styled-icons/entypo';
import { Person } from '@styled-icons/evaicons-solid';
import { RepoForked } from '@styled-icons/octicons';
import { Check } from '@styled-icons/boxicons-regular';

const Tile = styled.div`
  position: relative;
  border: 1px solid #F1F2F3;
  border-radius: 5px;
  padding: 1.5rem 1.5rem 4rem;
  margin-bottom: 1rem;
  min-height: 12rem;
`;
const Header = styled.h2`
  color: #243C56;
  margin-top: 0;
  margin-right: 2em;
`;
const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: none;
  background: #0062FF;
  color: #FFFFFF;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 0.75em;
  outline: none;
`;
const Link = styled.a`
  text-decoration: none;
  color: #0062FF;
`;
const Description = styled.p`
  color: #94A1B2;
`;
const Board = styled.div`
  background: #F6F9FE;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  font-weight: 600;
`;
const Language = styled.span`
  &:before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: #0062FF;
    border-radius: 50%;
    position: relative;
    top: 2px;
    margin-right: 0.5rem;
  }
`;
const Right = styled.span`
  float: right;
`;

const Repo = props => {
  const {
    id, 
    name, 
    description,
    html_url,
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
    <Col xs={12} md={4} key={id}>
      <Tile>
        <Header>{name}</Header>
        <Link href={html_url}>{full_name}</Link>
        <Description>{description}</Description>
        <Board>
          <Language>{language}</Language>
          <Right>
            <Star size="20" />{stargazers_count}&nbsp;
            <Person size="20" />{watchers_count}&nbsp;
            <RepoForked size="20" />{forks_count}
          </Right>
        </Board>
        <Button onClick={onButtonClick}>{isFavourite ? <Check size="20" /> : <Plus size="20" />}</Button>
      </Tile>
    </Col>
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
