/*
  Warnings:

  - Added the required column `gender` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "species" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "air_date" TEXT,
ADD COLUMN     "episode" TEXT;
