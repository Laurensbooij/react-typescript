import React, { Dispatch, FC, SetStateAction } from 'react';

import Container from './styled';

import Person from './Person';

interface IProps {
    people: {
        firstName: string, 
        lastName: string, 
        age: number,
        nationality: string,
        note: string,
        id: number,
        }[],
    setPeople: Dispatch<SetStateAction<{
        firstName: string,
        lastName: string,
        age: number,
        nationality: string,
        note: string,
        id: number,
    }[]>>,
    orientation?: string,
};

const PeopleList: FC<IProps> = ({ people, setPeople, orientation}) => {

    const renderListItems = ():JSX.Element[] => (
        people.map((person, i) => (
            <Person
                key={person.id}
                index={i}
                setPeople={setPeople}
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                nationality={person.nationality}
                note={person.note}
            />
        ))
    );

    console.log(people.length);


    return (
        <Container >
            {people.length > 0 ? renderListItems() : <p>There are no people in the list.</p>}
        </Container>
    );
};

export default PeopleList;