import { MenuAdmin } from '@/components/reusable/admin/MenuAdmin';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <div className="mx-auto page-container">cls
        <MenuAdmin>
          {children}
        </MenuAdmin>
      </div>
    </>
  );
}
