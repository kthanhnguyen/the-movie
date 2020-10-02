import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPoll,
  faCalendar,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

function renderIcon(title) {
  switch (title) {
    case "Popular":
      return faHeart;
    case "Top Rated":
      return faPoll;
    case "Upcoming":
      return faCalendar;
    default:
      return faPlayCircle;
  }
}

export default function MenuItem({ title, selected }) {
  return (
    <div selected={selected}>
      <FontAwesomeIcon
        icon={renderIcon(title)}
        size="1x"
        style={{ marginRight: "10px" }}
      />
      {title}
    </div>
  );
}
