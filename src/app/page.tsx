 "use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FooterPage } from '@/components/reusable/user/FooterPage';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <FooterPage />
    </div>
  );
}