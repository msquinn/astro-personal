"use client";

import { Bitcoin } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from "sonner";
import Eth from '@/icons/Eth';

async function onClickBtc() {
  await navigator.clipboard.writeText("3H4B3acFy1n1MesyA4khfcL1gHzWbJXjjW");
  toast.success("Address copied to clipboard!");
}

async function onClickEth() {
  await navigator.clipboard.writeText("mattquinn.eth");
  toast.success("Address copied to clipboard!");
}

const Money = () => {
  return (
    <div className='flex items-center space-x-2'>
        <Button className='p-0 h-5 w-5 sm:hover:scale-150 sm:hover:bg-transparent sm:transition-transform' onClick={onClickBtc} variant="ghost">
            <Bitcoin className='stroke-muted-foreground hover:stroke-foreground' />
        </Button>
        <Button className='p-0 h-5 w-5 sm:hover:scale-150 sm:hover:bg-transparent sm:transition-transform' onClick={onClickEth} variant="ghost">
            <Eth className='h-full w-full fill-muted-foreground hover:fill-foreground' />
        </Button>
    </div>
  )
}

export default Money