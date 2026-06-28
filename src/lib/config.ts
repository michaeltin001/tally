import fs from 'fs';
import path from 'path';
import { parse } from 'smol-toml';

export interface SiteConfig {
    site: {
        title: string;
        description: string;
        favicon: string;
    };
    author: {
        name: string;
        title: string;
        avatar: string;
    };
}

const CONFIG_PATH = path.join(process.cwd(), 'content', 'config.toml');

export function getConfig(): SiteConfig {
    try {
        const fileContent = fs.readFileSync(CONFIG_PATH, 'utf-8');
        const config = parse(fileContent) as unknown as SiteConfig;
        return config;
    } catch (error) {
        console.error('Error loading config:', error);
        // Return a default config or throw
        throw new Error('Failed to load content/config.toml');
    }
}
