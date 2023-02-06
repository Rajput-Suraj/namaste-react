import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Suraj',
    email: 'dummy@example.com',
  },
});

export default UserContext;
