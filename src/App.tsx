import React, { useState } from 'react';
import GlobalStyle from 'styles/global';

import AddPerson from 'components/AddPerson';
import PeopleList from 'components/PeopleList';

export interface IState {
  people: {
    firstName: string, 
    lastName: string, 
    age: number,
    nationality: string,
    note?: string,
    }[],
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      firstName: "Laurens",
      lastName: "Booij",
      age: 23,
      nationality: "Dutch",
      note: "Is learning typescript in React."
    },
  ]);
  
  return (
    <>
      <GlobalStyle />
      <AddPerson setPeople={setPeople} />
      <PeopleList
        people={people}
        orientation="row"
      />
    </>
  );
}

export default App;
