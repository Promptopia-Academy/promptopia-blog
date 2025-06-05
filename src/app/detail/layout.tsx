export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[url(/images/bg.png)] bg-cover bg-center bg-repeat px-[8%] pt-36 ">
      {children}
    </main>
  );
}
