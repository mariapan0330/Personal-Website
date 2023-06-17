import React, { useState, useEffect } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  live?: string;
  repo?: string;
  technologies: string;
  handleOverlayOpen: Function;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  technologies,
  live,
  repo,
  handleOverlayOpen,
}) => {

  return (
    <>
      <div className="project-card">
        <img
          src={require(`../images/projects/${image}.png`)}
          alt={title}
          className="project-card-image"
          onClick={() => {
            handleOverlayOpen(
              require(`../images/projects/${image}.png`),
              title
            );
          }}
        />
        <h1 className="project-card-title">{title}</h1>
        {/* {liveRepo} */}
        <p className="project-card-links">
          {live && (
            <a href={live} target="_blank">
              LIVE <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          )}
          {live && repo && " | "}
          {repo && (
            <a href={repo} target="_blank">
              REPO <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          )}
        </p>
        <p className="project-card-tech">{technologies}</p>
      </div>
    </>
  );
};

export default ProjectCard;
