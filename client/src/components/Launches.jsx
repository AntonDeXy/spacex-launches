import React from 'react'
import gql from 'graphql-tag'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'
import { useQuery } from '@apollo/react-hooks'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {
        loading && <h4>Loading...</h4>
      }
      {
        error && <h4>Error</h4>
      }
      {data && data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  )
}

export default Launches
