import { CharacterStatusType } from "assets/api/rick-and-morty-api";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

type Props = {
  status: CharacterStatusType;
  src: StaticImageData;
};

export const Status = (props: Props) => {
  const { status, src } = props;
  return (
    <>
      <Image src={src} alt="image" width={20} height={20} />
    </>
  );
};
