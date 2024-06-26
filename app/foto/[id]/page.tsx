
import photosGet from '@/app/src/actions/photos-get';
import PhotoContent from '@/app/src/components/photo/photo-content';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photosGet(params.id);
  

  if (!data) return { titlte: 'Fotos' };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await photosGet(params.id);

  if (!data) return notFound();
  return (
    <section className="mx-auto max-w-5xl px-4 mt-8">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
