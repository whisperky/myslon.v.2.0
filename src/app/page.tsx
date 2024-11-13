"use client";

import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";

import Loading from "@/components/Loading";
import SmokeEffect from "@/components/SmokeEffect";

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [mode, setMode] = useState("light");

  if (!isLoaded) return <Loading mode="dark" />;

  return (
    <div className="w-full mx-auto p-0 overflow albert-font">
      <Router>
        <Header />
        <Container />
        <Footer />
      </Router>

      <Flex w="100%" h="70vh" position="absolute" bottom="0" left="0">
        <Flex
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          left="0"
          bg="linear-gradient(to top, #00000000 0%, #121318 80%)"
          zIndex={1}
        />
        <SmokeEffect />
      </Flex>
    </div>
  );
}
