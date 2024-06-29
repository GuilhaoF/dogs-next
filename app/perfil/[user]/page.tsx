import photoGet from "@/app/src/actions/photo-get";
import Feed from "@/app/src/components/feed/feed";


export default async function PerfilUserPage({ params }: { params: { user: string } }) {
  
  const { data } = await photoGet({ user: params.user });
  if (!data) return null;

  return (  
    <section className=" mx-auto">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} /> 
    </section>
  );
}