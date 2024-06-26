import { Menu } from '@/components/reusable/Menu';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <>
      <div className="mx-auto page-container">
        <Menu>
          {children}
        </Menu>
      </div>
    </>
  );
}
