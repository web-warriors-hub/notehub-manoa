-- AlterTable
ALTER TABLE "Stuff" ALTER COLUMN "condition" SET DEFAULT 'good';

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'anonymous',
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "documentLink" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
