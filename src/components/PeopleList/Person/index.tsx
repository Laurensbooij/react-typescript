import React, { FC } from 'react';

import { Age, Container, FirstName, InfoContainer, LastName, NameContainer, Nationality, Note } from './styled';

interface IProps {
    firstName: string,
    lastName: string,
    age: number,
    nationality: string,
    note?: string,
};

const Person: FC<IProps> = ({ firstName, lastName, age, nationality, note }) => (
    <Container>
        <NameContainer>
            <FirstName>{firstName}</FirstName>
            <LastName>{lastName}</LastName>
        </NameContainer>
        <InfoContainer>
            <Age>Age {age}</Age>
            <Nationality>{nationality}</Nationality>
        </InfoContainer>
        <Note>{note}</Note>
    </Container>
);

export default Person;