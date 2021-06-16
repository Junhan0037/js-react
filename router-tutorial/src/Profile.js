import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  velopert: {
    name: '김민준',
    description: 'Frontend Enginner @ RIDI'
  },
  homer: {
    name: '호머 심슨',
    description: '심슨 가족에 나오는 아빠 역할 캐릭터'
  }
}

function Profile({match}) { // match: Route에서 내려주는 파라미터를 가지고 있다.
  const {username} = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>
        {profile.description}
      </p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;