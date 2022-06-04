import * as React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { FunctionComponent, ReactNode } from 'react';

type ProviderProps = {
  children?: ReactNode;
  queryClient?: QueryClient;
};
export const Providers: FunctionComponent<ProviderProps> = ({
  children,
  queryClient = new QueryClient()
}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
