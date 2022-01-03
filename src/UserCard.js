import React, { useState } from "react";

const UserCard = (props) => {
  const [buttonText, setButtonText] = useState("Add");
  const [buttonIcon, setButtonIcon] = useState("add icon");
  const [hasItBeenAdded, setHasItBeenAdded] = useState(false);

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          {props.children.props.name || "Anonymous"} said
        </div>
        <div className="description">{props.children}</div>
      </div>
      <div
        style={
          hasItBeenAdded
            ? { backgroundColor: "#fc8383" }
            : { backgroundColor: "#83fc8b" }
        }
        className="ui bottom button"
        onClick={() => {
          if (!hasItBeenAdded) {
            setButtonText("Remove");
            setButtonIcon("remove icon");
            setHasItBeenAdded(true);
          } else {
            setButtonText("Add");
            setButtonIcon("add icon");
            setHasItBeenAdded(false);
          }
        }}
      >
        <i className={buttonIcon}></i>
        {buttonText}
      </div>
    </div>
  );
};

export default UserCard;
