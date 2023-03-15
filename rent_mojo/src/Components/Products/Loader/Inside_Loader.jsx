import { CircularProgress } from "@chakra-ui/react";

function Inside_Loader() {
  return (
    <CircularProgress
      isIndeterminate
      color="green.300"
      mt="300px"
      size="100px"
      height="100vh"
      width="50vw"
      pos="relative"
      top="-150"
      left="50%"
    />
  );
}

export default Inside_Loader;
