-- AlterTable
ALTER TABLE `collection` MODIFY `anime_mal_id` VARCHAR(191) NULL,
    MODIFY `user_email` VARCHAR(191) NULL,
    MODIFY `anime_title` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `comment` MODIFY `anime_mal_id` VARCHAR(191) NULL,
    MODIFY `user_email` VARCHAR(191) NULL,
    MODIFY `comment` VARCHAR(191) NULL,
    MODIFY `username` VARCHAR(191) NULL,
    MODIFY `anime_title` VARCHAR(191) NULL;
