export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full text-white">
      <div className="fixed inset-0 bg-black/60 pointer-events-none z-0" />
            <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}