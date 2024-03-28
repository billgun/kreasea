'use client';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export function CreatorButton() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className='flex flex-row items-center justify-between space-y-2 rounded-lg border p-4'>
      <div className='space-y-0.5'>
        <div className='text-base'>Halaman Kreator</div>
        <div className='text-sm text-muted-foreground'>
          {enabled
            ? 'Kamu sudah aktif! Ayo berkreasea!'
            : 'Aktifkan agar kamu dapat memulai kreaseamu!'}
        </div>
      </div>
      <div>
        <Switch checked={enabled} onCheckedChange={setEnabled} />
      </div>
    </div>
  );
}
