import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { TfiReddit } from "react-icons/tfi";
import { RiDiscordLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <Flex justifyContent="center" alignItems="center" py={14}>
      <Flex direction="column" gap={4} zIndex={3} alignItems="center">
        <Flex gap={4}>
          <Link href="/">
            <Button
              variant="ghost"
              w="56px"
              h="56px"
              bg="#FFFFFF1A"
              border="1px solid #FFFFFF36"
              color="white"
              borderRadius="full"
              p="0"
              _hover={{
                bg: "white",
                color: "black",
              }}
            >
              <FaInstagram size={24} />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              w="56px"
              h="56px"
              bg="#FFFFFF1A"
              color="white"
              border="1px solid #FFFFFF36"
              borderRadius="full"
              p="0"
              _hover={{
                bg: "white",
                color: "black",
              }}
            >
              <TfiReddit size={24} />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="ghost"
              w="56px"
              h="56px"
              bg="#FFFFFF1A"
              color="white"
              border="1px solid #FFFFFF36"
              borderRadius="full"
              p="0"
              _hover={{
                bg: "white",
                color: "black",
              }}
            >
              <RiDiscordLine size={24} />
            </Button>
          </Link>
        </Flex>
        <Image src="img/logo_f.png" h="74px" mt="3" />
        <Text fontWeight="400" fontSize="16px" color="#C5C5C5" align="center">
          ⓒ Makeshift Software Inc
        </Text>
      </Flex>
    </Flex>
  );
};
