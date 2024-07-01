export async function generateMetadata() {
  return { title: "Stores", description: "" };
}

export default async function StoresPageLayout({
  children,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
