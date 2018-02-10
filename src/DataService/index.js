import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const clientInstance = new ApolloClient({
  // see https://launchpad.graphql.com/w573m4534z for the Apollo Server implementation
  link: new HttpLink({ uri: 'https://w573m4534z.lp.gql.zone/graphql' }),
  cache: new InMemoryCache()
});

class DataService {
  constructor(client) {
    this.client = client || clientInstance
  }

  getProfile = (id) => {
    return this.client.query({ query: gql`
      {
        profile(id: ${id}){
          fullname,
          title,
          company,
          url
        }
      }
    `});
  }

  getAllProfiles = () => {
    return this.client.query({ query: gql`
      {
        profiles{
          id,
          fullname,
        }
      }    
    ` });
  }
}

export default new DataService();

export {
  DataService
}