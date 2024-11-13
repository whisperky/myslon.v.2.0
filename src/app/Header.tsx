import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";

import { TfiReddit } from "react-icons/tfi";
import { RiDiscordLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const BgGradient = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: "100%",
        height: "500%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      viewBox="0 80 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="headerGradient" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#47403b99" />
          <stop offset="80%" stopColor="#00000000" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="url(#headerGradient)" />
    </svg>
  );
};

export const Header = () => {
  return (
    <Flex
      position="fixed"
      w="100%"
      zIndex={5}
      bg="#12131888"
      backdropFilter="blur(10px)"
      justifyContent="space-between"
      alignItems="center"
      px="15%"
      py="4"
      borderBottom="2px solid transparent"
      sx={{
        borderImage:
          "linear-gradient(to right, #121318 10%, #EEA22D 50%, #121318 90%) 1",
      }}
    >
      <Flex zIndex={1} w="100%" h="100%" justifyContent="space-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="img/logo.png" h="10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Flex gap={6} alignItems="center" color="white" zIndex={1}>
            <Link href="/">
              <Text color="white" fontSize="16px">
                CHAPTERS
              </Text>
            </Link>
            <Flex gap={4}>
              <Link href="/">
                <Button
                  variant="outline"
                  color="white"
                  border="1px solid #FFFFFF36"
                  borderRadius="full"
                  p="0"
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                >
                  <FaInstagram />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  color="white"
                  border="1px solid #FFFFFF36"
                  borderRadius="full"
                  p="0"
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                >
                  <TfiReddit />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  color="white"
                  border="1px solid #FFFFFF36"
                  borderRadius="full"
                  p="0"
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                >
                  <RiDiscordLine />
                </Button>
              </Link>
            </Flex>
            <Button
              variant="outline"
              color="white"
              border="1px solid #FFFFFF36"
              _hover={{ bg: "white", color: "black" }}
            >
              Log in / Sign up
            </Button>
          </Flex>
        </motion.div>
      </Flex>

      <BgGradient />
    </Flex>
  );
};
