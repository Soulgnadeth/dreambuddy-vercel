// import { PrismaClient } from './generated/client'
import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma
}

export { prisma }