import React from "react";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.profilePic} alt="profile picture"></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name} {props.surname}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default Comment;
