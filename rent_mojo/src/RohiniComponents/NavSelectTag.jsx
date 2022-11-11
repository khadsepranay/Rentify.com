import { Box, Select, Tag, Tooltip } from "@chakra-ui/react";
import React from "react";

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p={'1'} >
    <Tag backgroundColor={"transparent"} ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
))

export const NavSelectTag = () => (
  <Tooltip label='Click to Change City'>
    <CustomCard>
      <Select
        width={"110px"}
        focusBorderColor={'none'}
        border={'none'}
        overflow={'visible'}
        cursor={'pointer'}
        display={{ base: "none", md: "none", lg: "inline-flex" }}
      >
        <option value="">Mumbai</option>
        <option value="">Pune</option>
        <option value="">Banglore</option>
        <option value="">Delhi</option>
      </Select>
    </CustomCard>
  </Tooltip>
)

// render(<CustomToolTip />)