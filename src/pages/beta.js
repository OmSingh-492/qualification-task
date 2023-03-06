import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'

const BetaModules = ({data}) => {
    return (
    <Layout pageTitle='Beta Training Modules'>
      <ol>
        {data.allTrainingModulesYaml.edges.map(entry => {
          return (
            <li>
              <section>
                <ul>
                  <li>Name of the Training Module: {entry.node.name}</li>
                  <li>Brief desciption of the Training Module: {entry.node.description}</li>
                  <li>
                    <Link to={entry.node.repository}>Link to Repository for {entry.node.name}</Link>
                  </li>
                  <li>
                    <Link to={entry.node.webpage}>Link to Webpage of {entry.node.name}</Link>
                  </li>
                  <li>
                    <Link to={entry.node.videos}>Link to Videos of {entry.node.name}</Link>
                  </li>
                </ul>
              </section>
            </li>
          )})}
      </ol>
    </Layout>
    )
}

export const query = graphql`
query {
  allTrainingModulesYaml(filter: {status: {eq: "beta"}}) {
    edges {
      node {
        description
        name
        repository
        status
        videos
        webpage
      }
    }
  }
}
`

export const Head=() => <Seo title='Beta Training Modules'/>
export default BetaModules