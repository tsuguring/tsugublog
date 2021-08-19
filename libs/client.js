import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tsugublog',
  apiKey: process.env.API_KEY,
});
