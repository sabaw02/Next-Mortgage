import { StaticImageData } from "next/image";

export interface InfoBoxProps {
    title:string;
    text:string | number;
    imageSrc: string | StaticImageData;
}