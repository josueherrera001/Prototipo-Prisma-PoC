import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    // CREATE
    await prisma.user.create({
        data: { name: 'Josue', email: 'josue@example.com' }
    });
    // READ
    const users = await prisma.user.findMany();
    console.log('Usuarios:', users);
    // UPDATE
    await prisma.user.update({
        where: { email: 'josue@example.com' },
        data: { name: 'Josue Herrera' }
    });
    // DELETE
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
//# sourceMappingURL=index.js.map