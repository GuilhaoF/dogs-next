"use client";
import { useEffect, useRef, useState } from "react";

import FeedPhotos from "./feed-photos";
import PhotoGet, { Photo } from "../../actions/photo-get";
import Loading from "../loading/loading";

export default function Feed({ photos }: { photos: Photo[] }) {
  const [, setPhotosFeed] = useState<Photo[]>(photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true);
  const fetching = useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
    setPage((page) => page + 1);
  }

  useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await PhotoGet(
        { page, total: 6, user: 0 },
        {
          cache: "no-store",
        }
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photos} />
      <div className="flex h-[100px] mx-auto my-4">
        {infinite ? loading && <Loading /> : <p>Não existem mais postagens.</p>}
      </div>
    </div>
  );
}
