import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const newUser = await prisma.user.create({
        data: { name: "Josue", email: "josue@example.com" },
    });
    console.log("Usuario creado:", newUser);
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=test.js.map