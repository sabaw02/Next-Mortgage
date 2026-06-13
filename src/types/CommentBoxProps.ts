import { StaticImageData } from "next/image";

// export interface CommentBoxProps  {
//   id:number;
//   imageSrc:string | StaticImageData;
//   title:string;
//   caption:string;
//   isCenter?:boolean;
//   message?:string;
//   comments?:string;
// }

export interface CommentBoxProps {
  comments: Array<{
    id: number;
    title: string;
    caption: string;
    user: {
      firstName: string;
      lastName: string;
      profilePicture?: string | null;
    };
  }>;
}
