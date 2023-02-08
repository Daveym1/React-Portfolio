import React from "react";
import projects from "../data/projects.json";

export default function ProjectsPage() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={require("../images/teamGenerator.png")}
              className="card-img-top"
              alt="Team Generator screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[0].name}</h5>
              <p className="card-text">{projects[0].description}}</p>
              <a href="/#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={require("../images/readmeGenerator.png")}
              className="card-img-top"
              alt="Team Generator screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[1].name}</h5>
              <p className="card-text">{projects[1].description}}</p>
              <a href="/#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={require("../images/weatherApp.png")}
              className="card-img-top"
              alt="Team Generator screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[2].name}</h5>
              <p className="card-text">{projects[2].description}}</p>
              <a href="/#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={require("../images/WorkDayApp.png")}
              className="card-img-top"
              alt="Team Generator screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[3].name}</h5>
              <p className="card-text">{projects[3].description}}</p>
              <a href="/#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={require("../images/food2go.png")}
              className="card-img-top"
              alt="Team Generator screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[4].name}</h5>
              <p className="card-text">{projects[4].description}}</p>
              <a href="/#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={require("../images/teamGenerator.png")}
              className="card-img-top"
              alt="Team Generator screenshot"
            />
            <div className="card-body">
              <h5 className="card-title">{projects[5].name}</h5>
              <p className="card-text">{projects[5].description}}</p>
              <a href="/#" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        </div>

        
    </>
  );
}
console.log(projects[0]);
