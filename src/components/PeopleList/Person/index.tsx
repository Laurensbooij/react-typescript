import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';

import { Age, Container, FirstName, InfoContainer, LastName, NameContainer, Nationality, Note } from './styled';

interface PersonProps {
    firstName: string,
    lastName: string,
    age: number,
    nationality: string,
    note: string,
    index: number,
    setPeople: Dispatch<SetStateAction<{
        firstName: string,
        lastName: string,
        age: number,
        nationality: string,
        note: string,
        id: number,
    }[]>>,
};

const Person: FC<PersonProps> = ({ setPeople, firstName, lastName, age, nationality, note, index }) => {
    
    const containerElement: any = useRef(null);
    const [ hideContainer, setHideContainer ] = useState(false);
    
    let startPosition: number;
    let dragOffset: number;

    const containerMouseDownHandler = (event: any): void => {
        startPosition = event.clientX;

        document.body.addEventListener("mousemove", containerMouseMoveHandler, true);
        document.body.addEventListener("mouseup", containerMouseUpHandler, true);
    };
    
    const containerMouseUpHandler = (event: any): void => {
        containerElement.current.style.transform = `translateX(0)`;

        if (dragOffset >= 100) {
            setHideContainer(true);

            setPeople(prevPeople => {
                const updatedPeople = prevPeople.filter((item, i) => i !== index);

                return [ 
                    ...updatedPeople 
                ];
            });
        }

        document.body.removeEventListener("mousemove", containerMouseMoveHandler, true);
        document.body.removeEventListener("mouseup", containerMouseUpHandler, true);
    };

    const containerMouseMoveHandler = ( event: any ): void => {
        const currentPosition = event.clientX;
        dragOffset = currentPosition - startPosition;
        
        if (dragOffset <= 100) {
            containerElement.current.style.transform = `translateX(${dragOffset}px)`;
        }
        if (dragOffset > 100) {
            containerElement.current.style.transform = `translateX(100px)`;
        }
        if (dragOffset <= 0) {
            containerElement.current.style.transform = `translateX(0)`;
        }
    };

    return (
        <Container
            onMouseDown={containerMouseDownHandler}
            ref={containerElement}
            disappear={hideContainer}
        >
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
};

export default Person;