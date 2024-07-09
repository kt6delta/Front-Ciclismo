import { MenuAdmin } from "@/components/reusable/admin/MenuAdmin";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-background">
      <MenuAdmin />
        <div className="mx-auto page-container">
          {children}
        </div>
      </div>
    </>
  );
}
