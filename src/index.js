import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import UserCard from "./UserCard";
import ProfilePicture from "./images/pp.jpg";

const App = () => {
  const dateTimeOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const data = [
    {
      Id: 1,
      Name: "Furkan",
      Surname: "Aslan",
      Content: "It's amazing",
      Date: new Date().toLocaleDateString("en-US", dateTimeOptions),
      ProfilePic: ProfilePicture,
    },
    {
      Id: 2,
      Name: "John",
      Surname: "Doe",
      Content: "I love it",
      Date: new Date().toLocaleDateString("en-US", dateTimeOptions),
      ProfilePic: ProfilePicture,
    },
    {
      Id: 3,
      Name: "Guls",
      Surname: "Ault",
      Content: "That was big one",
      Date: new Date().toLocaleDateString("en-US", dateTimeOptions),
      ProfilePic: ProfilePicture,
    },
  ];

  return (
    <div className="ui comments">
      <UserCard>
        <div>This is another UserCard</div>
      </UserCard>
      {data.map((item, index) => {
        return (
          <UserCard key={item.Id}>
            <Comment
              name={item.Name}
              surname={item.Surname}
              content={item.Content}
              profilePic={item.ProfilePic}
              date={item.Date}
            />
          </UserCard>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
