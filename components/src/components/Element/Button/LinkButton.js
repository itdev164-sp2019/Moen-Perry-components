
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'
import { Link } from '@reach/router';

const StyledButton = styled(ButtonBase)`
padding: 8px;
color: ${props => (props.variant === 'primary' ? 'blue' : 'black')};
border: solid 1px ${props => props.variant === 'primary' ? 'black': 'blue'};
border-radius: ${props=> props.curve}px;
background-color: #9999ff;
:hover{
  background-color: #cc0099;
  color: white;
};
`


export const LinkButton = props => <StyledButton {...props} />

LinkButton.PropTypes = {
    variant: PropTypes.string,
    curve: PropTypes.string,
    

}