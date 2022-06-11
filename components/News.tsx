import Image from "next/image";

type NewsProps = {
  imgSrc?: string;
  title: string;
  description?: string;
  authorImg?: string;
  authorName?: string;
  authorRole?: string;
  hasImage?: boolean;
  largeImage?: boolean;
  itemIndex?: number;
};
export default ({
  imgSrc,
  title,
  description,
  authorImg,
  authorName,
  authorRole,
  hasImage,
  largeImage,
  itemIndex,
}: NewsProps) => (
  <div className="flex flex-col relative cursor-pointer transition hover:scale-105 duration-300 ease-in-out delay-50 mt-4">
    <img
      className="object-cover h-48 w-100 rounded-lg"
      src={imgSrc}
      alt="Img"
    />
    <h1 className="py-3 font-Inter font-semibold text-3xl text-black hover:text-primary text-left  ">
      {title}
    </h1>
    <p className="line-clamp-4 font-medium text-base text-description  mb-5 text-left text-ellipsis overflow-hidden">
      {description}
    </p>
    <div className="flex items-center">
      <Image
        className="rounded-lg"
        src={imgSrc}
        alt="Img"
        height="40"
        width="40"
      />
      <div className="flex flex-col ml-2">
        <strong>{authorName}</strong>
        <span className="text-sm text-description">Author</span>
      </div>
    </div>
  </div>
);
