export interface HeroSocialLink {
    label: string;
    href: string;
    icon: string;
}

export interface HeroSectionProps {
    name?: string,
    title?: string,
    country?: string,
    image: string, 
    summary: string;
    socials: HeroSocialLink[];
}