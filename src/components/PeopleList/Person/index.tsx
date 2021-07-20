import React, { Dispatch, FC, SetStateAction, useRef, useState } from 'react';

import { Age, Container, DeletePersonIndicator, FirstName, InformationContainer, LastName, MetaContainer, NameContainer, Nationality, Note } from './styled';

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
    
    const informationContainerElement: any = useRef(null);
    const deletePersonIndicatorElement: any = useRef(null);
    const [hideContainer, setHideContainer] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [dragCompleted, setDragCompleted] = useState(false);
    
    let startPosition: number;
    let dragOffset: number;

    const containerMouseDownHandler = (event: any): void => {
        startPosition = event.clientX;
        setIsPressed(true);

        document.body.addEventListener("mousemove", containerMouseMoveHandler, true);
        document.body.addEventListener("mouseup", containerMouseUpHandler, true);
    };
    
    const containerMouseUpHandler = (event: any): void => {
        informationContainerElement.current.style.transform = `translateX(0)`;
        setIsPressed(false);

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
            informationContainerElement.current.style.transform = `translateX(${dragOffset}px)`;
            deletePersonIndicatorElement.current.style.transform = `scale(${(dragOffset / 200) + 0.5})`;
            deletePersonIndicatorElement.current.style.opacity = `${(dragOffset / 100)}`;
            setDragCompleted(false);
        }
        if (dragOffset > 100) {
            informationContainerElement.current.style.transform = `translateX(100px)`;
            deletePersonIndicatorElement.current.style.transform = `scale(1)`;
            deletePersonIndicatorElement.current.style.opacity = '1';
            setDragCompleted(true);
        }
        if (dragOffset <= 0) {
            informationContainerElement.current.style.transform = `translateX(0)`;
            deletePersonIndicatorElement.current.style.transform = `scale(0.5)`;
            deletePersonIndicatorElement.current.style.opacity = '0';
            setDragCompleted(false);
        }
    };

    return (
        <Container>
            <InformationContainer
                onMouseDown={containerMouseDownHandler}
                ref={informationContainerElement}
                hideContainer={hideContainer}
                isPressed={isPressed}
            >
                <NameContainer>
                    <FirstName>{firstName}</FirstName>
                    <LastName>{lastName}</LastName>
                </NameContainer>
                <MetaContainer>
                    <Age>Age {age}</Age>
                    <Nationality>{nationality}</Nationality>
                </MetaContainer>
                <Note>{note}</Note>
            </InformationContainer>
            <DeletePersonIndicator 
                ref={deletePersonIndicatorElement}
                dragCompleted={dragCompleted}
            />
        </Container>
    );
};

export default Person;