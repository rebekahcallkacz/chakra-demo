import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

function App() {
  // Chakra UI has defined their own components for most html elements
  // For example
  // Box is div
  // Text is p
  // Heading is h
  // Link is a
  // They also have components for specific types of styling such as Flex and Center
  return (
    <ChakraProvider>
      <Box>
        <Heading>
          <Text>
            Edit <code>src/App.tsx</code> and save to reload.
          </Text>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;
