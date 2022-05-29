import axios from 'axios';
import { useQuery } from 'react-query';

export const HomePage = () => {
  const { data } = useQuery('version', async () => (await axios.get('/version')).data);
  if (!data) return <>loading</>;
  return (
    <>
      <span>{data}</span>
    </>
  );
};
