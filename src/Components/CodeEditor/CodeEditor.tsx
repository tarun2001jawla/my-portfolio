import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button, Box } from "@chakra-ui/react";

const CodeEditor = () => {
  const [code, setCode] = useState("console.log('Hello, Monaco!');");
  const [output, setOutput] = useState("");

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
      setOutput(error.message);
    }

    console.log = originalConsoleLog; // Restore original console.log
  };

  return (
    <Box>
      <Editor
        height="300px"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={(newValue) => setCode(newValue || "")}
        options={{
          fontSize: 16,
          formatOnType: true,
          autoClosingBrackets: "always",
          minimap: { enabled: false }
        }}
      />
      <Button mt={4} colorScheme="teal" onClick={runCode}>
        Run Code
      </Button>
      <Box mt={4} p={4} border="1px solid #ddd" borderRadius="md" bg="gray.100">
        <pre>{output}</pre>
      </Box>
    </Box>
  );
};

export default CodeEditor;
