import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BaseContainer = ({ children, flex, ...props }) => {
  if (flex) {
    return (
      <Flex {...props} className={props.className} bg ='magenta'>
        {children}
      </Flex>
    )
  } else {
    return (
      <Box {...props} className={props.className} bg ='yellow'>
        {children}
      </Box>
    )
  }
}

BaseContainer.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.node.isRequired
}
