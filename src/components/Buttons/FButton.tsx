import { Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  icon: ReactElement;
  onClick?: () => void;
}

export const FButton = ({ label, icon, onClick }: ButtonProps) => {
  return (
    <Flex
      as="button"
      onClick={onClick}
      alignItems="center"
      justifyContent="center"
      bg="transparent"
      color="white"
      px={4}
      py={2}
      border="1px solid grey"
      borderRadius="lg"
      className="shadow-lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      <Flex className="mr-2">{icon}</Flex>
      <Text fontSize="lg" fontWeight="medium">
        {label}
      </Text>
    </Flex>
  );
};
