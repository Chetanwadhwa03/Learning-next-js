export default function SignintLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    lang="en">
      <body className="min-h-full flex flex-col">
        <h1>NAVBAR for signin page</h1>
        {children}
        <h1>footer for signin page</h1>
        </body>
    </html>
  );
}
