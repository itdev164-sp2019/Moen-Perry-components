
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import styled from 'styled-components'
import { Link } from '@reach/router';

const StyledButton = styled(ButtonBase)`
${props => props.theme.variants.button[props.variant || 'primary']};
`


export const LinkButton = props => <StyledButton {...props} />

LinkButton.PropTypes = {
    variant: PropTypes.string,
    curve: PropTypes.string,
    

}