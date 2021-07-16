import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 510px;
`;

export const Title = styled.h2`
    margin: 0 0 1rem;
    font-family: 'Hind';
    font-weight: bold;
    font-size: 2rem;
`;

export const FormLabel = styled.label<{ isRequired?: boolean }>`
    font-weight: bold;

    &:after {
        content: "*";
        color: #F6A600;
        display: ${ props => props.isRequired ? "inline-block" : "none"};
    }
`;

export const FormLegend = styled.legend<{ isRequired?: boolean }>`
    font-weight: bold;

    &:after {
        content: "*";
        color: #F6A600;
        display: ${ props => props.isRequired ? "inline-block" : "none"};
    }
`;

export const FormFieldSet = styled.fieldset`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
    margin: 0;
    padding: 0;
    border: none;
`;

export const MultipleInputsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 250px);
    grid-gap: 10px;
`;

export const Input = styled.input`
    padding: 0.5rem 1rem;
    margin: 10px 0 20px;
    background-color: #FAFAFA;
    border: solid 2px #CACACA;
    border-radius: 6px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    max-width: 250px;

    &:hover, &:focus {
        border-color: #F6A600;
    }
`;

export const Textarea = styled.textarea`
    padding: 0.5rem 1rem;
    margin: 10px 0 20px;
    background-color: #FAFAFA;
    border: solid 2px #CACACA;
    border-radius: 6px;
    width: 100%;
    height: 5rem;
    resize: none;
    font-size: 1rem;

    &:hover, &:focus {
        border-color: #F6A600;
    }
`;

export const Button = styled.button`
    padding: 5px 0;
    background-color: #f6A600;
    color: #FFF;
    border: 3px solid #f6A600;
    border-radius: 8px;
    font-family: 'Hind';
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        color: #000;
        background-color: transparent;
    }
`;