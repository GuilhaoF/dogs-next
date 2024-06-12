import Image from "next/image";
import Link from "next/link";
import { Photo } from "../../actions/photo-get";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className="grid grid-cols-3 gap-4 mb-4 justify-items-center sm:grid-cols-2">
    {photos.map((photo, i) => (
      <li className={`${i === 1 ? 'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1' : ''}`} key={photo.id + i}>
        <Link href={`/foto/${photo.id}`} scroll={false}>
          <span className="grid rounded-sm overflow-hidden cursor-pointer group">
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
              priority
            />
            <span className="grid-area-1 bg-black bg-opacity-30 text-white text-center items-center justify-center hidden group-hover:flex mb-0">
              {photo.acessos}
              <Image
                src="/assets/visualizacao.svg"
                alt="Visualização"
                width={16}
                height={10}
              />
            </span>
          </span>
        </Link>
      </li>
    ))}
  </ul>
  );
}
