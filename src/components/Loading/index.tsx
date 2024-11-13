import React from "react";
import { Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";

// import SmokeEffect from "../SmokeEffect";
import magicLoadingJson from "@/public/magic_loading.json";

interface LoadingProps {
  mode: "dark" | "light";
}

const Loading = ({ mode }: LoadingProps) => {
  return (
    <Flex className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 ">
      {mode === "dark" && (
        <Flex
          position="absolute"
          bg="black"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="0"
        ></Flex>
      )}
      <Lottie
        animationData={magicLoadingJson}
        loop={true}
        className="w-72 h-72"
        autoplay={true}
      />
    </Flex>
  );
};

export default Loading;
