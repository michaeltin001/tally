import { notFound } from 'next/navigation';
import { getPageConfig } from '@/lib/content';
import { Metadata } from 'next';

// Component Imports
import Tally from '@/components/tally/Tally';

import { TallyPageConfig } from '@/types/page';

export async function generateMetadata(): Promise<Metadata> {
    const pageConfig = getPageConfig('tally') as TallyPageConfig | null;

    if (!pageConfig) {
        return {};
    }

    return {
        title: pageConfig.title,
        description: pageConfig.description,
    };
}

export default async function TallyPage() {
    // Fetch the tally TOML config
    const pageConfig = getPageConfig('tally') as TallyPageConfig | null;

    if (!pageConfig) {
        notFound();
    }

    return (
        <div className="w-full">
            <Tally config={pageConfig} />
        </div>
    );
}
