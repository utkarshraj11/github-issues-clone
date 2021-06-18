import React from "react";
import "./Issues.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

const Issues = (props) => {
    return (
      <ul className="Issues">
      {props.issues.map(issue => {
        return (
            <li className="Issue" key={issue.id}>
            <a class="Anchor"
              href={`${issue.html_url}`}
            >
              <div className="header d-inline">
                <span className="status">
                  {issue.state === "open" ? (
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  )}
                </span>
                <h5 className="title d-inline">{issue.title.length>100?issue.title.substring(0,100)+'...':issue.title}</h5>
              </div>
            </a>
            <div className="labels d-inline">
              {issue.labels.length
                ? issue.labels.map(label => {
                    return (
                      <span
                        key={label.id}
                        style={{ backgroundColor: `#${label.color}` }}
                        className="label"
                      >
                        {label.name}
                      </span>
                    );
                  })
                : null}
            </div>
            <div className="info">
              <span className="issueNo">#{issue.number} </span>
              <span className="createdAt"> opened on {issue.created_at.slice(0,10)} </span>
              <span className="by"> by <a href={`github.com/${issue.user.login}`}> {issue.user.login}</a></span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Issues;