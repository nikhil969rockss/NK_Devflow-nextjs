import { TECH_STACK_ICONS } from '@/constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, '').toLowerCase();

  return TECH_STACK_ICONS[normalizedTechName]
    ? `${TECH_STACK_ICONS[normalizedTechName]} colored`
    : `devicon-devicon-plain`;
};
