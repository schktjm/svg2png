import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Container = styled.div``;
const Input = styled.input`
    display: none;
`;

type Props = {

};

const Top: React.FC<Props> = props => {
    return (
        <Container>
            <Input
                accept="image/*"
                type="file"
                id="contained-button-file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" >Upload</Button>
            </label>
        </Container>
    )
};


export default Top;
