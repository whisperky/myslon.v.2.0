import { Flex, Button, ButtonProps } from "@chakra-ui/react";

interface GradButtonProps extends ButtonProps {
  visible?: boolean;
  outlines?: boolean;
  children: React.ReactNode;
}

export const GradButton = ({
  children,
  visible = true,
  outlines = false,
  ...props
}: GradButtonProps) => {
  return (
    <Button
      position="relative"
      color="white"
      fontSize="14px"
      fontWeight="800"
      bgImage={
        visible
          ? "linear-gradient(90deg, #371D07 0%, #683000 51.67%, #EEA22D 100%)"
          : "none"
      }
      borderRadius="lg"
      justifyContent="center"
      alignItems="center"
      _hover={visible ? {} : { transform: "scale(1.05)", boxShadow: "lg" }}
      sx={{
        ...(outlines && {
          "&::before, &::after, & > div:last-of-type::before": {
            content: '""',
            position: "absolute",
            top: "-5px",
            left: "-5px",
            right: "-5px",
            bottom: "-5px",
            borderRadius: "xl",
            border: "1px solid",
            borderColor: visible ? "rgba(238, 162, 45, 0.3)" : "transparent",
            pointerEvents: "none",
          },
          "&::after": {
            top: "-10px",
            left: "-10px",
            right: "-10px",
            bottom: "-10px",
            borderColor: visible ? "rgba(238, 162, 45, 0.2)" : "transparent",
          },
          "& > div:last-of-type::before": {
            top: "-15px",
            left: "-15px",
            right: "-15px",
            bottom: "-15px",
            borderColor: visible ? "rgba(238, 162, 45, 0.1)" : "transparent",
          },
        }),
      }}
      {...props}
    >
      {visible && (
        <>
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="lg"
            bgImage="radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)"
          />
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            borderRadius="lg"
            bgImage="linear-gradient(44.19deg, rgba(0, 0, 0, 0.08) 37.32%, rgba(0, 0, 0, 0) 50.98%)"
          />
        </>
      )}
      {children}
    </Button>
  );
};
