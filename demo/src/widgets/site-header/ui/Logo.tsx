import Image from "next/image";

const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 682;

type LogoProps = {
  height?: number;
};

export function Logo({ height = 104 }: LogoProps) {
  const width = Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT);

  return (
    <Image
      src="/brand/club-logo.png"
      alt=""
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      style={{ width, height }}
      priority
    />
  );
}
