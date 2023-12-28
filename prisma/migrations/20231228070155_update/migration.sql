/*
  Warnings:

  - Made the column `anime_mal_id` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_email` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_title` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_mal_id` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_email` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comment` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_title` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `anime_mal_id` VARCHAR(191) NOT NULL,
    MODIFY `user_email` VARCHAR(191) NOT NULL,
    MODIFY `anime_title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comment` MODIFY `anime_mal_id` VARCHAR(191) NOT NULL,
    MODIFY `user_email` VARCHAR(191) NOT NULL,
    MODIFY `comment` VARCHAR(191) NOT NULL,
    MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `anime_title` VARCHAR(191) NOT NULL;
