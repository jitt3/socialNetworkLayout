import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const fabian = await prisma.user.upsert({
    where: {id: 1},
    update: {},
    create: {
      id: 1,
      email: 'fabian@example.com',
      name: 'Fabian',
      posts: {
        create: {
          title: 'My first post(Fabian)',
          content: 'This is my first post',
        },
      },
      myFriends: {
        create: {
          name: 'JC',
          email: 'jc@example.com',
        },
      },
    },
  })

  const JC = await prisma.user.upsert({
    where: {id: 2},
    update: {},
    create: {
      id: 2,
      email: 'jc@example.com',
      name: 'JC',
      posts: {
        create: {
          title: 'My first post(JC)',
          content: 'This is my first post',
        },
      },
      myFriends: {
        create: {
          name: 'Fabian',
          email: 'fabian@example.com',
        },
      },
    },
  })
  const John = await prisma.user.upsert({
    where: {id: 3},
    update: {},
    create: {
      id: 3,
      email: 'john@example.com',
      name: 'John',
      posts: {
        create: {
          title: 'My first post(John)',
          content: 'This is my first post',
        },
      },
      myFriends: {
        create: {
          name: 'Fabian',
          email: 'fabian@example.com',
        },
      },
    },
  })
  console.log({fabian, JC, John})
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
