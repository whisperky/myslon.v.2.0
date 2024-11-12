import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";

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
          <stop offset="0%" stopColor="#EEA22D55" />
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
      w="70%"
      top="0"
      left="0"
      right="0"
      zIndex={3}
      bg="#121318"
      justifyContent="space-between"
      alignItems="center"
      mx="auto"
      py="4"
      borderBottom="2px solid transparent"
      sx={{
        borderImage: "linear-gradient(to right, #000000, #EEA22D, #000000) 1",
      }}
    >
      <Flex
        position="absolute"
        w="100%"
        h="100%"
        // bg="#46413c"
        zIndex={1}
        justifyContent="space-between"
      />

      <Image src="img/logo.png" h="10" zIndex={1} />
      <Flex gap={6} alignItems="center" color="white" zIndex={1}>
        <Text color="white" fontSize="16px">
          CHAPTERS
        </Text>
        <Flex gap={4}>
          <Link href="/">
            <Button variant="outline" color="white">
              T
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" color="white">
              R
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" color="white">
              D
            </Button>
          </Link>
        </Flex>
        <Button variant="outline" color="white">
          Log in / Sign up
        </Button>
      </Flex>

      <BgGradient />
    </Flex>
  );
};
