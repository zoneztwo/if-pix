import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

console.log("[PRISMA] Initializing PrismaClient. DATABASE_URL present:", !!process.env.DATABASE_URL);

let prismaInstance: PrismaClient;

try {
  prismaInstance =
    globalForPrisma.prisma ||
    new PrismaClient({
      log: ["error", "warn"],
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
} catch (error) {
  console.error("[PRISMA_INIT_ERROR]:", error);
  // Fallback to default initialization if manual one fails
  prismaInstance = globalForPrisma.prisma || new PrismaClient();
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
