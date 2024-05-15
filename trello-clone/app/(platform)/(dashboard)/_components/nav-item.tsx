'use client'

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import {
    Activity,
    Layout,
    Settings
} from 'lucide-react';


export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
}
interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    organization: any;
    onExpand: (id: string) => void;

}
export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}: NavItemProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const routes = [
        {
            label: 'Boards',
            icons: <Layout className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}`
        },
        {
            label: 'Activity',
            icons: <Activity className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: 'Settings',
            icons: <Settings className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}/settings`
        },
        {
            label: 'Billing',
            icons: <Settings className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}/settings`
        },
    ]

    const onClick = (href: string) => {
        router.push(href);
    }
    return (
        <AccordionItem
            value={organization.id}
            className='border-none'
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn('flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline',
                isActive && !isExpanded && 'bg-sky-500/10 text-sky-700')}
            >
                <div className='flex items-center gap-x-2'>
                    <div className='w-7 h-7 relative'>
                        <Image 
                            fill
                            src={organization.imageUrl}
                            alt='Organization'
                            className='rounded-sm object-cover'

                        />
                    </div>
                    <span className='font-medium text-sm'>{organization.name}</span>
                </div>
            </AccordionTrigger>
        </AccordionItem>
    )
}