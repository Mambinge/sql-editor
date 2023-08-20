import React, { useState } from "react";
import Editor from "./Editor";
import { HStack, VStack } from "@chakra-ui/react";
import OutputDisplay from "./OutputDisplay";
import Navbar from "./Navbar";
import QueryHistory from "./QueryHistory";

const FrontLayout = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(query);
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [history, setHistory] = useState([]);

  const usePredefinedQuery = (value) => {
    setQuery(value);
  };

  const runQuery = () => {
    setSubmittedQuery(value);
  };

  return (
    <VStack bgColor={"blackAlpha.100"} spacing={8}>
      <Navbar usePredefinedQuery={usePredefinedQuery} />
      <HStack w={"100%"} justifyContent={"space-between"} pl={12} pr={8}>
        <QueryHistory history={history} value={value} setValue={setValue} />
        <Editor
          query={query}
          setQuery={setQuery}
          runQuery={runQuery}
          usePredefinedQuery={usePredefinedQuery}
          history={history}
          setSubmittedQuery={setSubmittedQuery}
          setHistory={setHistory}
          value={value}
          setValue={setValue}
        />
      </HStack>
      <OutputDisplay submittedQuery={submittedQuery} />
    </VStack>
  );
};

export default FrontLayout;
