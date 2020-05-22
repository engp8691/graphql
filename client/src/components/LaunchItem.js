import React from "react";
import classNames from "classnames";

const LaunchItem = (props) => {
  const openDetails = (flight_number) => {
    console.log(flight_number);
  };
  
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": props.launch_success,
                "text-danger": !props.launch_success,
              })}
            >
              {props.mission_name}
            </span>{" "}
          </h4>
          <p>Date: {props.launch_date_local} </p>
        </div>
        <div className="col-md-3">
          <button
            className={`btn btn-secondary`}
            onClick={(e) => openDetails(props.flight_number)}
          >
            Deatils
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
