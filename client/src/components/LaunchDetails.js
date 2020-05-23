import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Moment from "react-moment";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

//////////
const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
/////////

const ModalDialog = (props) => {
  return (
    <Modal show={true} animation={false} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Launch Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.bodyContent}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const LaunchDetails = ({ show, flight_number, handleClose }) => {
  React.useEffect(() => {
    return (e) => {
      console.log("THis is the clean callback");
    };
  }, []);

  return show ? (
    <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
      {({ loading, error, data }) => {
        let bodyContent = null;

        if (loading) {
          bodyContent = <span>Loading ...</span>;
          return (
            <ModalDialog bodyContent={bodyContent} handleClose={handleClose} />
          );
        } else if (error) {
          bodyContent = <span>Error Happened ...</span>;
          return (
            <ModalDialog bodyContent={bodyContent} handleClose={handleClose} />
          );
        } else {
          console.log(data, data.launch.rocket);

          bodyContent = (
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>Mission Name</td>
                  <td>{data.launch.mission_name}</td>
                </tr>

                <tr>
                  <td>Launch Date</td>
                  <td>
                    <Moment format="YYYY-MMM-DD HH:mm">
                      {data.launch.launch_date_local}
                    </Moment>
                  </td>
                </tr>

                <tr>
                  <td>Result</td>
                  <td>
                    {data.launch.launch_success ? "Successful" : "Failed"}
                  </td>
                </tr>

                <tr>
                  <td>Rocket Name</td>
                  <td>{data.launch.rocket.rocket_name}</td>
                </tr>

                <tr>
                  <td>Rocket Type</td>
                  <td>{data.launch.rocket.rocket_type}</td>
                </tr>
              </tbody>
            </Table>
          );

          return (
            <ModalDialog bodyContent={bodyContent} handleClose={handleClose} />
          );
        }
      }}
    </Query>
  ) : null;
};

export default LaunchDetails;

// {
//     launch(flight_number: 2) {
//       flight_number
//       mission_name
//       launch_year
//       launch_date_local
//       launch_success
//       rocket {
//         rocket_id
//         rocket_name
//         rocket_type
//       }
//     }
// }
