"use client";

import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";

import Loading from "@/components/Loading";

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
    </div>
  );
}
