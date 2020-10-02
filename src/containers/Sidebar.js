import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MenuItem from "../components/MenuItem";

function renderCate(categories, selected, setisOpened) {
  return categories.map((category, i) => (
    <Link
      to={`/discover/${category}`}
      key={i}
      onClick={setisOpened ? () => setisOpened(false) : null}
      className="genre-link"
    >
      <MenuItem
        mobile={setisOpened ? 1 : 0}
        title={category}
        selected={category === selected ? true : false}
      />
    </Link>
  ));
}

function renderGenres(genres, selected, setisOpened) {
  if (genres) {
    return genres.map((genre) => (
      <Link
        to={`/genres/${genre.name}`}
        key={genre.id}
        onClick={setisOpened ? () => setisOpened(false) : null}
        className="genre-link"
      >
        <MenuItem
          mobile={setisOpened ? 1 : 0}
          title={genre.name}
          selected={genre.name === selected ? true : false}
        />
      </Link>
    ));
  }
}

const Sidebar = ({ genres, staticCategories, selected }) => {
  return (
    <div className="sidebar">
      <div>
        <h2 className="h2-heading">Discover</h2>
        {renderCate(staticCategories, selected)}
        <h2 className="h2-heading">Genres</h2>
        {renderGenres(genres, selected)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ geral }) => {
  return {
    staticCategories: geral.staticCategories,
    genres: geral.genres,
    selected: geral.selected,
  };
};

export default connect(mapStateToProps)(Sidebar);
