import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

const LaunchDetails = (props) => {
  const [show, setShow] = React.useState(false);
  const [flight_number, setFlightNumber] = React.useState(-1);

  React.useEffect(() => {
    setShow(props.show);
    setFlightNumber(props.flight_number);
  }, [props.show]);

  const handleClose = () => {
    props.setHide();
    setShow(false);
  };

  console.log(show, props);

  return show ? (
    <>
    <div>Hello</div>

      {/* <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          // if (loading) return <h4>Loading....</h4>;
          if (loading) console.log("Loading...");
          if (error) console.log(error);
          console.log(data);
        }}
      </Query> */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
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