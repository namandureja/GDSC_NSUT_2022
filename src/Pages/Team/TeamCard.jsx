import React from 'react'

export default function TeamCard(props) {
  return (
    <div className="team-card">
      <div className="member-image" style={{borderColor: props.color, backgroundImage: `url(${props.memberImage})`}}></div>
      <div className="member-name">{props.memberName}</div>
      <div className="member-status">{props.memberStatus}</div>
      <div className="member-social">
          <a href={props.memberSocialPortfolioPath} target="_blank" rel="noreferrer"><ion-icon name="laptop-outline"></ion-icon></a>
          <a href={props.memberSocialGithubPath} target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
          <a href={props.memberSocialaedinPath} target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
          <a href={props.memberSocialInstagramPath} target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
      </div>
    </div>
  );
}
