"use client";

import React from "react";

import Link from "next/link";

import Image from "next/image";
import PhotoDelete from "./photo-delete";
import { PhotoData } from "../../actions/photos-get";
import { useUser } from "../../context/user-context";
import PhotoComments from "./photo-comment";

const PhotoContent = ({
  data,
  single,
}: {
  data: PhotoData;
  single: boolean;
}) => {
  const { user } = useUser();
  const { photo, comments } = data;

  return (
    <div
      className={`mx-auto ${
        single ? "h-auto grid-cols-1" : "h-144 grid-cols-[36rem_20rem]"
      } rounded-sm bg-white grid grid-rows-[auto_1fr_auto] overflow-hidden opacity-0 scale-75 animate-scaleUp`}
    >
      <div
        className={`${
          single ? "row-span-1 rounded-lg" : "row-span-3"
        } overflow-hidden`}
      >
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className="">
        <div>
          <p className="mb-4 flex justify-between items-center">
            {user && user.username === photo.author ? (
              <div className=" h-20 w-28 bg-slate-950">
                <PhotoDelete id={String(photo.id)} />
              </div>
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="flex text-lg font-bold mt-4 mb-8">
            <li className="mr-8">{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      {comments.length > 0 && (
        <PhotoComments single={single} id={photo.id} comments={comments} />
      )}
    </div>
  );
};

export default PhotoContent;
