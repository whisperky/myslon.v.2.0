import { Flex, Button, ButtonProps } from "@chakra-ui/react";

interface GradButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const GradButton = ({ children, ...props }: GradButtonProps) => {
  return (
    <Button
      position="relative"
      color="white"
      fontSize="14px"
      fontWeight="800"
      p="6"
      bgImage="linear-gradient(90deg, #371D07 0%, #683000 51.67%, #EEA22D 100%)"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderRadius="md"
        bgImage="radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)"
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderRadius="md"
        bgImage="linear-gradient(44.19deg, rgba(0, 0, 0, 0.08) 37.32%, rgba(0, 0, 0, 0) 50.98%)"
      />
      {children}
    </Button>
  );
};
