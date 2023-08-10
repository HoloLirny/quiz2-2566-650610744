import React from "react";
export const PostOwner = ({ username, title, likeNum }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/นศ.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">{username}</span>
      </div>

      <span>{title}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{likeNum} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
