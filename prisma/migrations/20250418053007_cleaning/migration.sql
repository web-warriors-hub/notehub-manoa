/*
  Warnings:

  - You are about to drop the column `contactId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_contactId_fkey";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "contactId";

-- DropTable
DROP TABLE "Contact";
