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
