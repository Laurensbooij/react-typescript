import styled, { css } from 'styled-components';

import closeSvg from 'media/delete.svg';

interface DeletePersonIndicatorProps {
    dragCompleted: boolean,
}

interface InformationContainerProps {
    hideContainer: boolean,
    isPressed: boolean,
}

export const Container = styled.div`
    position: relative;
    margin: 0 0 20px 0;
`;

export const DeletePersonIndicator = styled.div<DeletePersonIndicatorProps>`
    z-index: 0;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 50px;
    border: 3px solid;
    border-color: ${props => props.dragCompleted ? '#F6A600' : '#CACACA'};
    border-radius: 50px;
    top: calc(50% - 25px);
    left: 10px;
    transition: all 0.3s ease;
    background: url(${closeSvg});
    background-size: 18px;
    background-repeat: no-repeat;
    background-position: center;
`;

export const InformationContainer = styled.div<InformationContainerProps>`
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 25px;
    border-radius: 0 8px 8px 0;
    background-color: #fff;
    transition: all 0.3s ease;
    position: relative;
    cursor: grab;


    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;

    ${ props => props.hideContainer && css`
        opacity: 0;
        transform: scale(0);
    `}

    &:before {
        content: "";
        position: absolute;
        height: 100%;
        width: 5px;
        background-color: #f6A600;
        left: -10px;
        top: 0;
        transition: all 0.3s ease;
    }

    &:hover {
        box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);

        &:before {
            left: ${props => props.isPressed ? '-10px' : '-15px'};
            transition: all 0.3s ease;
        }
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
`;

export const FirstName = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    color: #333333;
    margin: 0 0.4rem 0 0;
`;

export const LastName = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    color: #AAAAAA;
    margin: 0 1rem 0 0.1rem;
`;

export const MetaContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 15px 0;
`;

export const Age = styled.p`
    color: #6A6A6A;
    font-weight: 700;
    margin: 0 20px 0 0;
    display: inline-block;
    position: relative;

    &:after {
        content: "";
        width: 2px;
        height: 100%;
        border-radius: 10px;
        background-color: #F6A600;
        position: absolute;
        right: -10px;
        top: 0;
        border-radius: 10px;
    }
`;

export const Nationality = styled.p`
    color: #6A6A6A;
    font-weight: 700;
    margin: 0;
`;

export const Note = styled.div`
    width: 100%;
    padding: 1rem 0 0 0;
    border-top: solid 2px #EAEAEA;
`;