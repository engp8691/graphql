import React from "react";
import classNames from "classnames";
import Moment from "react-moment";

import LaunchDetails from "./LaunchDetails";

const LaunchItem = (props) => {
  const [show, setShow] = React.useState(false);
  const [flight_number, setFlightNumber] = React.useState(-1);

  const openDetails = (flight_number) => {
    setShow(true);
    setFlightNumber(flight_number);
  };

  const handleClose = (e)=>{
    setShow(false);
    setFlightNumber(-1);
  }

  return (
    <div className="card card-body mb-3">
      {show && flight_number > 0 ? (
        <LaunchDetails show={show} flight_number={flight_number} handleClose={handleClose} />
      ) : null}

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
          <p>
            Date:{" "}
            <Moment format="YYYY-MMM-DD HH:mm">
              {props.launch_date_local}
            </Moment>{" "}
          </p>
        </div>
        <div className="col-md-3">
          <button
            className={`btn btn-secondary`}
            onClick={(e) => openDetails(props.flight_number)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
