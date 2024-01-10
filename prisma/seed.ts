const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const handtowels = await prisma.category.create({
    data: {
      name: 'handtowels',
      slug: 'handtowels',
    },
  })
  const facialtissue = await prisma.category.create({
    data: {
      name: 'facialtissue',
      slug: 'facialtissue',
    },
  })
  const napkinspaper = await prisma.category.create({
    data: {
      name: 'napkinspaper',
      slug: 'napkinspaper',
    },
  })
  const toiletpaper = await prisma.category.create({
    data: {
      name: 'toiletpaper',
      slug: 'toiletpaper',
    },
  })

  console.log({ handtowels, facialtissue, napkinspaper, toiletpaper })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
