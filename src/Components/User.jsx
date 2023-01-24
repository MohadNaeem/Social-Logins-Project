import React, { memo } from "react";

export const User = memo((props) => {
  //   const avatar =
  //     props?.profile?.avatar ||
  //     props?.profile?.profile_image_url ||
  //     props?.profile?.avatar_url ||
  //     props?.profile?.picture ||
  //     props?.profile?.picture?.data?.url ||
  //     "https://maxcdn.icons8.com/Share/icon/p1em/users//gender_neutral_user1600.png";

  const avatar =
    props.provider === "google"
      ? props?.profile?.picture
      : props?.profile?.picture?.data?.url;

  return (
    <div className="card">
      <div className="avt">
        <img alt="141" src={avatar} />
      </div>

      <h3 className="provider">{props?.provider.toUpperCase()}</h3>

      <div className="content">
        <div className="data">
          <div className="field">
            <div className="label">Name: </div>
            <div className="value">{JSON.stringify(props?.profile.name)}</div>
          </div>
          <div className="field">
            <div className="label">Email: </div>
            <div className="value">{JSON.stringify(props?.profile.email)}</div>
          </div>
        </div>
        <button className="btnLogout" onClick={props.onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
});
