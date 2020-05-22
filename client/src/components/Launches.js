import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const Launches = (props) => {
  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading....</h4>;
          if (error) console.log(error);

          return data.launches.map((launch) => {
            return <LaunchItem key={launch.flight_number} {...launch} />;
          });
        }}
      </Query>
    </div>
  );
};

export default Launches;
