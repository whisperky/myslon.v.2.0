import { Image, ImageProps } from "@chakra-ui/react";

interface EpicImageProps extends ImageProps {
  src: string;
}

export const EpicImage = ({ src, ...props }: EpicImageProps) => {
  return (
    <Image
      src={src}
      position="absolute"
      objectFit="cover"
      h="calc(100% - 20px)"
      draggable={false}
      {...props}
    />
  );
};
