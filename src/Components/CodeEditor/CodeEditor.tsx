import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button, Box, Flex, Textarea, VStack, Heading, Select, Text } from "@chakra-ui/react";
import { FaPlay, FaCloudDownloadAlt, FaJs } from "react-icons/fa";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState("console.log('👋 Hello World!');");
  const [output, setOutput] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Courier New");
  const [theme, setTheme] = useState("vs-dark");

  const runCode = () => {
    let capturedOutput = "";
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      capturedOutput += args.join(" ") + "\n";
      originalConsoleLog(...args);
    };

    try {
      eval(code);
      setOutput(capturedOutput || "Code executed successfully.");
    } catch (error) {
      if (error instanceof Error) {
        setOutput(error.message);
      } else {
        setOutput(String(error));
      }
    }

    console.log = originalConsoleLog; // Restore original console.log
  };

  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "code.txt";
    document.body.appendChild(element); 
    element.click();
  };

  return (
    <Flex direction="column" align="center" p={4}>
      <Heading mb={4}  mt="3em" fontSize="4xl"
        fontWeight= {700}
        textAlign="center"
        color="blue.500"
        fontFamily= "Orbitron, sans-serif"
        textDecoration="underline">
        Let's have some fun with coding...
      </Heading>
      <Flex
        mb={4}
        w="100%"
        maxW="1200px"
        justify="flex-start"
        align="center"
        mt={10}
        direction={{ base: "column", md: "row" }}
      >
        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: -5, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" color="yellow.500" mr={2} ml={2} mb={-1}>
            <FaJs />
          </Text>
          <Text fontSize="lg" fontWeight="bold" color="yellow.500" mb={-1}>
            JS
          </Text>
        </Flex>

        <Box mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Select
            width={{ base: "100%", md: "150px" }}
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            <option value="Courier New">Courier New</option>
            <option value="Consolas">Consolas</option>
            <option value="Times New Roman">Times New Roman</option>
          </Select>
        </Box>
        <Box mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Select
            width={{ base: "100%", md: "100px" }}
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          >
            <option value={14}>14px</option>
            <option value={16}>16px</option>
            <option value={18}>18px</option>
            <option value={20}>20px</option>
          </Select>
        </Box>
        <Box>
          <Select
            width={{ base: "100%", md: "150px" }}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
            <option value="hc-black">High Contrast</option>
          </Select>
        </Box>
      </Flex>
      <Flex
        w="100%"
        maxW="1200px"
        justify="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <VStack spacing={4} w={{ base: "100%", md: "50%" }} mb={{ base: 4, md: 0 }}>
          <Box
            w="100%"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
          >
            <Editor
              height="400px"
              width="100%"
              language="javascript"
              theme={theme}
              value={code}
              onChange={(newValue) => setCode(newValue || "")}
              options={{
                fontFamily,
                fontSize,
                formatOnType: true,
                autoClosingBrackets: "always",
                minimap: { enabled: false },
              }}
            />
          </Box>
          <Flex w="100%" justify="flex-start">
            <Button
              colorScheme="teal"
              leftIcon={<FaPlay />}
              onClick={runCode}
              mr={4}
            >
              Run Code
            </Button>
            <Button
              colorScheme="blue"
              leftIcon={<FaCloudDownloadAlt />}
              onClick={downloadCode}
            >
              Download Code
            </Button>
          </Flex>
        </VStack>
        <Box w={{ base: "100%", md: "50%" }}>
          <Textarea
            ml={{ base: 0, md: 10 }}
            isReadOnly
            value={output}
            placeholder="👋 Hello World!"
            height="400px"
            bg="gray.100"
            p={4}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            color="black"
            boxShadow="md"
            resize="none"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CodeEditor;