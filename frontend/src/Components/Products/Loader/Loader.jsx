import { CircularProgress } from "@chakra-ui/react";

function Loader() {
  return (
    <CircularProgress
      isIndeterminate
      color="green.300"
      mt="300px"
      size="100px"
      height="100vh"
    />
  );
}

export default Loader;
