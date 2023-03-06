import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
        <h1>{pageTitle}</h1>
        <br></br>
        <h3>Filters for Video Availability</h3>
        <label for='videos'>Choose the video availability criteria for training module below: </label>
        <br></br>
        <Link to="/">All</Link>
        <br></br>
        <Link to="/available">Available</Link>
        <br></br>
        <Link to="/notAvailable">Not Available</Link>
        <br></br>
        <h3>Filters for Status</h3>
        <label for='status'>Choose the status criteria for training module below: </label>
        <br></br>
        <Link to="/">All</Link>
        <br></br>
        <Link to="/stable">Stable</Link>
        <br></br>
        <Link to="/beta">Beta</Link>
        <br></br>
        <Link to="/alpha">Beta</Link>
        <br></br>
        <section>
            {children}
        </section>
    </main>
  )
}

export default Layout