import { Flex, FlexProps, Text } from "@chakra-ui/react";

export const AdCard = ({ ...props }: FlexProps) => {
  return (
    <Flex bg="black" borderRadius="lg" px={5} py={4} {...props}>
      <Text fontWeight="600" fontSize="12px" color="white">
        Advertisement
      </Text>
    </Flex>
  );
};
