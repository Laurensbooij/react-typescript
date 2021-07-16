import React, { FC } from 'react';

import Container from './styled';

import Person from './Person';

interface IProps {
    people: {
        firstName: string, 
        lastName: string, 
        age: number,
        nationality: string,
        note?: string,
        }[],
    orientation?: string,
};

const PeopleList: FC<IProps> = ({ people, orientation}) => {

    const renderListItems = ():JSX.Element[] => (
        people.map((person, i) => (
            <Person
                key={i}
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                nationality={person.nationality}
                note={person.note}
            />
        ))
    )

    return (
        <Container >
            {renderListItems()}
        </Container>
    );
};

export default PeopleList;