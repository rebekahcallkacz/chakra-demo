import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  Center,
  ChakraProvider,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  // This is just straightforward React - keeping track of the number of times the button is clicked
  const [clickCount, setClickCount] = useState<number>(0);
  // This is a Chakra UI hook - they've built quite a few based on React
  // that you can use for common situations where you need a hook with a specific type of behavior
  const {
    isOpen: isAlertVisible,
    onClose: onAlertClose,
    onOpen: onAlertOpen,
  } = useDisclosure({ defaultIsOpen: false });

  // This is also just react, but we're calling a function that's part of the Chakra UI hook useDisclosure
  useEffect(() => {
    if (clickCount === 3) {
      onAlertOpen();
    }
  }, [clickCount, onAlertOpen]);

  const handleClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
  };

  // You have to wrap your base app in the ChakraProvider so that all the default styles are applied
  return (
    <ChakraProvider>
      {/*
        Chakra UI has defined their own components for most html elements
        For example
        Box is div
        Text is p
        Heading is h
        Link is a
        They also have components for specific types of styling such as Flex, HStack and Center
      */}
      <Center>
        <Heading textAlign={"center"}>
          <Text fontSize="6xl">
            Edit <code>src/App.tsx</code> and save to reload.
          </Text>
          <Link href="https://reactjs.org" rel="noopener noreferrer" isExternal>
            Learn React
          </Link>
        </Heading>
      </Center>
      <Flex>
        <HStack>
          {/* For any component you want to use, you can review it in the documentation
        The default page will have some code snippets and the general functionality 
        The props tab will have any props that Chakra has added in addition to the html element props that already exist
        The theming tab will give you guidance on how to customize style
        For example, on this button, we're using a default color scheme from the theme to change the button color*/}
          <Button colorScheme="cyan" onClick={() => handleClick()}>
            Click Me!
          </Button>
          <Text>{`You have clicked ${clickCount} times.`}</Text>
        </HStack>
      </Flex>
      {isAlertVisible && (
        <Alert status="warning">
          <AlertIcon />
          <Box>
            <AlertTitle>Warning!</AlertTitle>
            <AlertDescription>You have clicked 3 times.</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onAlertClose}
          />
        </Alert>
      )}
    </ChakraProvider>
  );
}

export default App;
