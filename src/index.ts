import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // crea
  await prisma.user.create({
    data: { name: 'Josue', email: 'josue@example.com' }
  });

  // lee
  const users = await prisma.user.findMany();
  console.log('Usuarios:', users);

  // actualiza
  await prisma.user.update({
    where: { email: 'josue@example.com' },
    data: { name: 'Josue Herrera' }
  });

  // elimina
  await prisma.user.delete({
    where: { email: 'josue@example.com' }
  });

  console.log('Operaciones CRUD finalizadas.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
