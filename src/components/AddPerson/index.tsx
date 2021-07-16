import React, { ChangeEvent, FC, useState } from 'react';

import {  
    Button,
    Container, 
    FormFieldSet, 
    FormLabel, 
    FormLegend, 
    Input, 
    MultipleInputsContainer,
    Textarea,
    Title,
} from './styled';

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<{
        firstName: string, 
        lastName: string, 
        age: number,
        nationality: string,
        note?: string,
    }[]>>,
};

const AddPerson: FC<IProps> = ({ setPeople }) => {
    
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        age: "",
        nationality: "",
        note: "",
    });

    const [incompleteFormNotice, setIncompleteFormNotice] = useState(false)

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {

        if (event.target.name === "age") {
            setInput((prevInput) => ({
                ...prevInput,
                [event.target.name]: parseInt(event.target.value),
            }));
        } 
        else {
            setInput((prevInput) => ({
                ...prevInput,
                [event.target.name]: event.target.value,
            }));
        }
    };

    const buttonClickHandler = ():void => {
        if(
            !input.firstName ||
            !input.lastName ||
            !input.age ||
            !input.nationality
        ) return;

        setPeople(prevPeople => ([
            ...prevPeople, 
            {
                firstName: input.firstName,
                lastName: input.lastName,
                age: parseInt(input.age),
                nationality: input.nationality,
                note: input.note,
            },
        ]));

        setInput({
            firstName: "",
            lastName: "",
            age: "",
            nationality: "",
            note: "",
        })
    };

    return (
        <Container>
            <Title>Add new person</Title>
            <FormFieldSet>
                <FormLegend isRequired>Name</FormLegend>
                <MultipleInputsContainer>
                    <Input 
                        type="text"
                        placeholder="First name"
                        value={input.firstName}
                        onChange={inputChangeHandler}
                        name="firstName"
                    />
                    <Input 
                        type="text"
                        placeholder="Last name"
                        value={input.lastName}
                        onChange={inputChangeHandler}
                        name="lastName"
                    />
                </MultipleInputsContainer>
            </FormFieldSet>
            <FormLabel isRequired>Age</FormLabel>
            <Input 
                type="number"
                placeholder="Age"
                value={input.age}
                onChange={inputChangeHandler}
                name="age"
            />
            <FormLabel isRequired>Nationality</FormLabel>
            <Input 
                type="text"
                placeholder="Nationality"
                value={input.nationality}
                onChange={inputChangeHandler}
                name="nationality"
            />
            <FormLabel>Note</FormLabel>
            <Textarea 
                placeholder="Note"
                value={input.note}
                onChange={inputChangeHandler}
                name="note"
            />
            <Button onClick={buttonClickHandler}>Add</Button>
        </Container>
    );
};

export default AddPerson;