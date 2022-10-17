import Image from "next/image";

type LoginProps = {
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function LoginButton({
  className,
  src,
  alt,
  width,
  height,
}: LoginProps) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
