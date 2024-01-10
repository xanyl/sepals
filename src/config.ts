import { Category } from '@prisma/client'

export const INFINITE_SCROLL_LIMIT = 8

export const categories: Category[] = [
  {
    name: 'Hand towel',
    slug: 'handtowel',
  },
  {
    name: 'Facial tissue', 
    slug: 'facialtissue',
  },
  {
    name: 'Napkins paper',
    slug: 'napkinspaper',
  },
  {
    name: 'Toilet paper',
    slug: 'toiletpaper',
  },
]
