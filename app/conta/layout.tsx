import ContaHeader from "../src/components/conta/conta-header";


export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl px-4 mx-auto">
      <ContaHeader />
      {children}
    </div>
  );
}