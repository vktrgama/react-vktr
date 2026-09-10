import React from 'react';
import NewMovies from './NewMovies';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'; // GraphQl services from Apollo
import config from '../../aws-exports';

function Projects(props) {
  
  /*
  * The endpoint is created by the Amplify CLI and stored in the aws-exports.js file
  */
  const { endpoint } = config.aws_cloud_logic_custom[0]

  const client = new ApolloClient({
    uri: `${endpoint}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <div class="container well">
          <div class="row">
              <div class="grid_12">
                  <h2 class="wow fadeInLeft">Personal Projects</h2>
                  <h3 class="hdng__off3 wow fadeInRight animated">Tech evaluation and other stuff</h3>
              </div>
          </div>
          
          <div class="project">
            <div class="row">
                <div class="grid_12">
                    <div class="row">
                        <ApolloProvider client={client}>
                            <NewMovies />
                        </ApolloProvider>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="grid_12">
                    <div class="project_crdts">
                        <h5>Apollo Graphql</h5>
                        <span class="fa fa-calendar"></span> Date: <time datetime="2021-05-02">May, 02, 2021</time> <br />
                        <span class="fa fa-align-left"></span> Skills: <a href="#">graphQL</a>, <a href="#">AWS</a>, <a href="#">React</a>
                    </div> 
                    <p>
                        Quick implementation of data consumption from graphQL, setup an AWS Amplify backend lambda, with schema configuration and data fetch from an external source (<a href="https://api.themoviedb.org">The Movie DB</a>) and render results using a generic React <a href="https://github.com/andrzejewsky/netflix-slider">Netflix slider</a>.
                    </p>
                    <pre class="lang-html s-code-block hljs xml">
                        <code>
                        </code>
                    </pre>
                </div>
                <div class="grid_7"></div>
            </div>
      </div>
    </div>
  )
}

export default Projects;