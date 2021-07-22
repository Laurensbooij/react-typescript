import React, { useState } from 'react';
import GlobalStyle from 'styles/global';

import AddPerson from 'components/AddPerson';
import PeopleList from 'components/PeopleList';

export interface AppState {
  people: {
    firstName: string, 
    lastName: string, 
    age: number,
    nationality: string,
    note: string,
    id: number,
    }[],
}

function App() {

  const [people, setPeople] = useState<AppState["people"]>([
    {
      firstName: "Laurens",
      lastName: "Booij",
      age: 23,
      nationality: "Dutch",
      note: "Is learning typescript in React.",
      id: 189296,
    },
    {
      firstName: "Eran",
      lastName: "Kan",
      age: 22,
      nationality: "Turkish",
      note: "Abi",
      id: 189344,
    },
    {
      firstName: "Charlotte",
      lastName: "Morrissey",
      age: 24,
      nationality: "Irish",
      note: "Is pretty.",
      id: 139567,
    },
    {
      firstName: "Laurens",
      lastName: "Booij",
      age: 23,
      nationality: "Dutch",
      note: "Is learning typescript in React.",
      id: 325653,
    },
    {
      firstName: "Eran",
      lastName: "Kan",
      age: 22,
      nationality: "Turkish",
      note: "Abi",
      id: 235654,
    },
    {
      firstName: "Lioz",
      lastName: "David",
      age: 22,
      nationality: "Dutch",
      note: "Is pretty.",
      id: 235745,
    },
    {
      firstName: "Raffi",
      lastName: "Lion",
      age: 23,
      nationality: "Dutch",
      note: "Is learning typescript in React.",
      id: 849268,
    },
    {
      firstName: "Mike",
      lastName: "Donker",
      age: 22,
      nationality: "Dutch",
      note: "Abi",
      id: 124463,
    },
    {
      firstName: "Yoeri",
      lastName: "Pasmans",
      age: 24,
      nationality: "Dutch",
      note: "Is working on map app together with me so that's why I'm learning this so we can work on it together long text init bruv lad mate m8 cool lad aight peace.",
      id: 463757,
    },
  ]);
  
  return (
    <>
      <GlobalStyle />
      <AddPerson setPeople={setPeople} />
      <PeopleList
        people={people}
        setPeople={setPeople}
        orientation="row"
      />
    </>
  );
}

export default App;
