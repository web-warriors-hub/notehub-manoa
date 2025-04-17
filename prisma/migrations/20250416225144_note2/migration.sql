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
    "contactId" INTEGER,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
