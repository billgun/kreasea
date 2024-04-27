'use client';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { toggleCreatorStatus } from './actions';

interface CreatorButtonProps {
  isCreator: boolean;
}

export function CreatorButton({ isCreator }: CreatorButtonProps) {
  const [enabled, setEnabled] = useState(isCreator);
  const onClickCreator = () => {
    if (enabled) {
      setEnabled(false);
      toggleCreatorStatus(false);
    } else {
      setEnabled(true);
      toggleCreatorStatus(true);
    }
  };

  return (
    <div className='flex flex-row items-center justify-between space-y-2 rounded-lg border p-4'>
      <div className='space-y-0.5'>
        <div className='text-base'>Halaman Kreator</div>
        <div className='text-sm text-muted-foreground'>
          {enabled
            ? 'Kamu sudah aktif! Ayo berkreasea!'
            : 'Aktifkan agar kamu dapat ditemukan dihalaman kreator!'}
        </div>
      </div>
      <div>
        <Switch checked={enabled} onCheckedChange={onClickCreator} />
      </div>
    </div>
  );
}
