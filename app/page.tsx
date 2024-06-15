import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Dialog from '@/components/ui/dialog';
import Dropdown from '@/components/ui/dropdown';
import Input from '@/components/ui/input';
import { Toast } from '@/components/ui/toast';
import React from 'react';

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Toast type="info">
        {' '}
        <h3 className="text-sm">10 selected</h3>
        <h3 className="text-sm">Edit</h3>
        <h3 className="text-sm text-red-500">Delete</h3>
      </Toast>
    </div>
  );
}
