import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #000000;
    /* width: 50%; */
    min-height: 350px;
    margin: auto;
    padding: 10px;
    border-radius: 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    :hover {
        background-color: #ccc;
        cursor: pointer;
        color: #000;
    }

    :active{
        background-color: #EFFE5F;
        position: relative;
        top: 1px;
        color: #000;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`