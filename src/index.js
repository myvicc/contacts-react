import React, {createContext, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Application} from "./Application";

export const DataUser = createContext({});

function UserProvider({children}) {
    const data = [
        {
            id:1,
            name: "Will",
            lastname: "Smith",
            phone: 67890
        },
        {
            id:2,
            name: "Nick",
            lastname: "Dohn",
            phone: 67800
        },
        {
            id:3,
            name: "Micky",
            lastname: "Mouse",
            phone: 98890
        },
        {
            id:4,
            name: "Roby",
            lastname: "Williams",
            phone: 12890
        },
    ]
    const [user, setUser] = useState(data);

    return (
        <DataUser.Provider value={{user, setUser}}>
            {children}
        </DataUser.Provider>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
      <UserProvider>
          <Application />
      </UserProvider>
  </React.StrictMode>
);


