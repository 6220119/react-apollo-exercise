import { DataService } from '.'
import gql from 'graphql-tag';

it('getAllProfiles should have the right schema', () => {
  let schema = gql`
      {
        profiles{
          id,
          fullname,
        }
      }    
    `;

  const mockClient =  {
    query(queryObj) {
      expect(queryObj.query.loc.source.body).toEqual(schema.loc.source.body);
    }
  };
  const ds = new DataService(mockClient);
  ds.getAllProfiles();
});

it('getProfile should have the right schema', () => {
  let getSchema = (id) => gql`
      {
        profile(id: ${id}){
          fullname,
          title,
          company,
          url
        }
      }  
    `;

  const mockClient =  {
    query(queryObj) {
      expect(queryObj.query.loc.source.body).toEqual(getSchema(123).loc.source.body);
    }
  };
  const ds = new DataService(mockClient);
  ds.getProfile(123);
});