import * as React from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

export const HomePage = () => {
  const { data } = useQuery('version', async () => (await axios.get('/version')).data);
  if (!data) return <>loading</>;
  return (
    <>
      <span className="bg-dupa text-2xs">{data}</span>
    </>
  );
};
