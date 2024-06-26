'use server';

import { PHOTO_GET } from "../functions/api";
import apiError from "../functions/api-error";
import { CommentProps } from "../types/commentType";
import { Photo } from "./photo-get";



export type PhotoData = {
  photo: Photo;
  comments: CommentProps[];
};

export default async function photosGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ['photos', 'comment'],
      },
    });
    if (!response.ok) throw new Error('Erro ao pegar a foto.');
    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
