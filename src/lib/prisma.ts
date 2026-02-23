import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// DATABASE_URL'in olup olmadığını kontrol et, yoksa boş bir string veya fallback kullan
// Bu, build aşamasında çökmesini engeller.
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
