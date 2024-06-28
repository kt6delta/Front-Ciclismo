import { MenuAdmin } from '@/components/reusable/MenuAdmin';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <div className="mx-auto page-container">
        <MenuAdmin>
          {children}
        </MenuAdmin>
      </div>
    </>
  );
}
