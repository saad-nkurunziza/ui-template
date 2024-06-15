import * as React from 'react';
import { Button } from './button';

const Dialog = () => {
  return (
    <div className="bg-card border text-card-foreground shadow-sm  transition space-y-1 w-72 p-3 rounded-md">
      <h3 className="font-medium">Are you sure?</h3>
      <h5 className="text-sm">Data will be deleted permanently</h5>
      <div className="flex mt-5 gap-2.5 stretch-1">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Confirm</Button>
      </div>
    </div>
  );
};

export default Dialog;
