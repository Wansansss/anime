import { PrismaClient } from "@prisma/client/";
import { withAccelerate } from '@prisma/extension-accelerate';
import middleware from "next-auth/middleware";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate(),middleware())
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
