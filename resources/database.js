--MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @ @UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @ @SQL_MODE, SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Schema findservice_freelance
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--This db is
for the freelance part of findservice website
--

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Schema findservice_freelance
--
--This db is
for the freelance part of findservice website
--
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE SCHEMA IF NOT EXISTS `findservice_freelance`;
USE `findservice_freelance`;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`service_provider`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`service_provider` (
    `idservice_provider`
    INT NOT NULL AUTO_INCREMENT,
    `first_name`
    VARCHAR(15) NOT NULL,
    `last_name`
    VARCHAR(20) NOT NULL,
    `other_name`
    VARCHAR(45) NULL,
    `username`
    VARCHAR(45) NOT NULL,
    `profile_picture`
    LONGBLOB NOT NULL,
    `fav_quote`
    VARCHAR(50) NULL,
    PRIMARY KEY(`idservice_provider`),
    UNIQUE INDEX `idservice_provider_UNIQUE` (`idservice_provider`
        ASC) VISIBLE,
    UNIQUE INDEX `user_name_UNIQUE` (`username`
        ASC) VISIBLE)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`contact_info`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`contact_info` (
    `contact_id`
    INT NOT NULL AUTO_INCREMENT,
    `phone_number(1)`
    BIGINT(20) NOT NULL,
    `phone_number(2)`
    BIGINT(20) NOT NULL,
    `email`
    VARCHAR(50) NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`contact_id`, `service_provider_idservice_provider`),
    INDEX `fk_contact_info_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_contact_info_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`location`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`location` (
    `location_id`
    INT NOT NULL AUTO_INCREMENT,
    `country`
    VARCHAR(45) NOT NULL,
    `Region`
    VARCHAR(45) NOT NULL,
    `city`
    VARCHAR(45) NOT NULL,
    `town`
    VARCHAR(45) NOT NULL,
    `map_link`
    VARCHAR(45) NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`location_id`, `service_provider_idservice_provider`),
    INDEX `fk_location_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_location_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`certificates`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`certificates` (
    `certificate_id`
    INT NOT NULL AUTO_INCREMENT,
    `title`
    VARCHAR(100) NOT NULL,
    `institution`
    VARCHAR(100) NOT NULL,
    `reference`
    VARCHAR(100) NOT NULL,
    `national_identificaiton`
    LONGBLOB NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`certificate_id`, `service_provider_idservice_provider`),
    INDEX `fk_certificates_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_certificates_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`experience`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`experience` (
    `experience_id`
    INT NOT NULL AUTO_INCREMENT,
    `role_played`
    VARCHAR(100) NOT NULL,
    `institution`
    VARCHAR(100) NOT NULL,
    `from`
    DATE NOT NULL,
    `to`
    DATE NOT NULL,
    `reference`
    VARCHAR(100) NOT NULL COMMENT 'Someone who can attest to your experience.',
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`experience_id`, `service_provider_idservice_provider`),
    INDEX `fk_experience_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_experience_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`skills`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`skills` (
    `skill_id`
    INT NOT NULL AUTO_INCREMENT,
    `skill`
    VARCHAR(45) NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`skill_id`, `service_provider_idservice_provider`),
    INDEX `fk_skills_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_skills_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`language`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`language` (
    `language_id`
    INT NOT NULL AUTO_INCREMENT,
    `language`
    VARCHAR(45) NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`language_id`, `service_provider_idservice_provider`),
    INDEX `fk_language_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_language_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`external_profile_links`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`external_profile_links` (
    `external_id`
    INT NOT NULL AUTO_INCREMENT,
    `link`
    VARCHAR(45) NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`external_id`, `service_provider_idservice_provider`),
    INDEX `fk_external_profile_links_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_external_profile_links_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`person_review`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`person_review` (
    `person_review_id`
    INT NOT NULL AUTO_INCREMENT,
    `user_email`
    VARCHAR(45) NOT NULL,
    `tagline`
    VARCHAR(50) NULL,
    `rating`
    INT NOT NULL,
    `statement`
    VARCHAR(150) NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`person_review_id`, `service_provider_idservice_provider`),
    UNIQUE INDEX `user_email_UNIQUE` (`user_email`
        ASC) VISIBLE,
    INDEX `fk_person_review_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_person_review_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`categories`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`categories` (
    `category_id`
    INT NOT NULL AUTO_INCREMENT,
    `name`
    VARCHAR(20) NOT NULL,
    `description`
    VARCHAR(150) NULL,
    `categories_category_id`
    INT NOT NULL,
    PRIMARY KEY(`category_id`, `categories_category_id`),
    INDEX `fk_categories_categories1_idx` (`categories_category_id`
        ASC) VISIBLE,
    CONSTRAINT `fk_categories_categories1`
    FOREIGN KEY(`categories_category_id`) REFERENCES `findservice_freelance`.
    `categories` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION);


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`service_offered`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`service_offered` (
    `service_id`
    INT NOT NULL AUTO_INCREMENT,
    `title`
    VARCHAR(45) NOT NULL,
    `description`
    VARCHAR(200) NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    `categories_category_id`
    INT NOT NULL,
    `categories_categories_category_id`
    INT NOT NULL,
    PRIMARY KEY(`service_id`, `service_provider_idservice_provider`, `categories_category_id`, `categories_categories_category_id`),
    INDEX `fk_service_offered_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    INDEX `fk_service_offered_categories1_idx` (`categories_category_id`
        ASC, `categories_categories_category_id`
        ASC) VISIBLE,
    CONSTRAINT `fk_service_offered_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_service_offered_categories1`
    FOREIGN KEY(`categories_category_id`, `categories_categories_category_id`) REFERENCES `findservice_freelance`.
    `categories` (`category_id`, `categories_category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`keyword`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`keyword` (
    `keyword_id`
    INT NOT NULL AUTO_INCREMENT,
    `word`
    VARCHAR(15) NULL,
    `service_offered_service_id`
    INT NOT NULL,
    `service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`keyword_id`, `service_offered_service_id`, `service_offered_service_provider_idservice_provider`),
    INDEX `fk_keyword_service_offered1_idx` (`service_offered_service_id`
        ASC, `service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_keyword_service_offered1`
    FOREIGN KEY(`service_offered_service_id`, `service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_offered` (`service_id`, `service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`profile_pics`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`profile_pics` (
    `service_pics_id`
    INT NOT NULL AUTO_INCREMENT,
    `pics`
    VARCHAR(45) NOT NULL,
    `service_offered_service_id`
    INT NOT NULL,
    `service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`service_pics_id`, `service_offered_service_id`, `service_offered_service_provider_idservice_provider`),
    INDEX `fk_profile_pics_service_offered1_idx` (`service_offered_service_id`
        ASC, `service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_profile_pics_service_offered1`
    FOREIGN KEY(`service_offered_service_id`, `service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_offered` (`service_id`, `service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`pricing`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`pricing` (
    `pricing_id`
    INT NOT NULL AUTO_INCREMENT,
    `price_category`
    VARCHAR(45) NULL,
    `description`
    VARCHAR(45) NULL,
    `Price`
    VARCHAR(45) NULL,
    `service_offered_service_id`
    INT NOT NULL,
    `service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`pricing_id`, `service_offered_service_id`, `service_offered_service_provider_idservice_provider`),
    INDEX `fk_pricing_service_offered1_idx` (`service_offered_service_id`
        ASC, `service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_pricing_service_offered1`
    FOREIGN KEY(`service_offered_service_id`, `service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_offered` (`service_id`, `service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`about`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`about` (
    `about_id`
    INT NOT NULL AUTO_INCREMENT,
    `description_of_service`
    VARCHAR(200) NULL,
    `requirements`
    VARCHAR(200) NULL,
    `offers`
    VARCHAR(100) NULL,
    `discounts`
    VARCHAR(100) NULL,
    `give aways`
    VARCHAR(200) NULL,
    `service_offered_service_id`
    INT NOT NULL,
    `service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`about_id`, `service_offered_service_id`, `service_offered_service_provider_idservice_provider`),
    INDEX `fk_about_service_offered1_idx` (`service_offered_service_id`
        ASC, `service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_about_service_offered1`
    FOREIGN KEY(`service_offered_service_id`, `service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_offered` (`service_id`, `service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`service_reviews`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`service_reviews` (
    `review_id`
    INT NOT NULL AUTO_INCREMENT,
    `user_email`
    VARCHAR(45) NOT NULL,
    `rating`
    INT NULL,
    `tagline`
    VARCHAR(45) NULL,
    `statement`
    VARCHAR(200) NULL,
    `service_offered_service_id`
    INT NOT NULL,
    `service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`review_id`, `service_offered_service_id`, `service_offered_service_provider_idservice_provider`),
    UNIQUE INDEX `user_email_UNIQUE` (`user_email`
        ASC) VISIBLE,
    INDEX `fk_service_reviews_service_offered1_idx` (`service_offered_service_id`
        ASC, `service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_service_reviews_service_offered1`
    FOREIGN KEY(`service_offered_service_id`, `service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_offered` (`service_id`, `service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`service_provider_ids`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`service_provider_ids` (
    `all_id`
    INT NOT NULL AUTO_INCREMENT,
    `experience_id`
    INT NOT NULL,
    `language_id`
    INT NOT NULL,
    `skill_id`
    INT NOT NULL,
    `external_id`
    VARCHAR(45) NOT NULL,
    `contact_id`
    VARCHAR(45) NOT NULL,
    `person_review_id`
    VARCHAR(45) NOT NULL,
    `certificate_id`
    VARCHAR(45) NOT NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`all_id`),
    INDEX `fk_service_provider_ids_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_service_provider_ids_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`service_ids`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`service_ids` (
    `all_service_id`
    INT NOT NULL AUTO_INCREMENT,
    `keyword_id`
    VARCHAR(45) NOT NULL,
    `service_pics_id`
    VARCHAR(45) NOT NULL,
    `pricing_id`
    VARCHAR(45) NOT NULL,
    `review_id`
    VARCHAR(45) NOT NULL,
    `about_id`
    VARCHAR(45) NOT NULL,
    `service_offered_service_id`
    INT NOT NULL,
    `service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`all_service_id`),
    INDEX `fk_service_ids_service_offered1_idx` (`service_offered_service_id`
        ASC, `service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_service_ids_service_offered1`
    FOREIGN KEY(`service_offered_service_id`, `service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_offered` (`service_id`, `service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`list_providers`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`list_providers` (
    `list_providers_id`
    INT NOT NULL AUTO_INCREMENT,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`list_providers_id`),
    INDEX `fk_list_providers_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_list_providers_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`pricing_categories`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`pricing_categories` (
    `price_categories_id`
    INT NOT NULL AUTO_INCREMENT,
    `category_name`
    VARCHAR(45) NOT NULL,
    `category_description`
    VARCHAR(100) NULL,
    `pricing_pricing_id`
    INT NOT NULL,
    `pricing_service_offered_service_id`
    INT NOT NULL,
    `pricing_service_offered_service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`price_categories_id`, `pricing_pricing_id`, `pricing_service_offered_service_id`, `pricing_service_offered_service_provider_idservice_provider`),
    INDEX `fk_pricing_categories_pricing1_idx` (`pricing_pricing_id`
        ASC, `pricing_service_offered_service_id`
        ASC, `pricing_service_offered_service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_pricing_categories_pricing1`
    FOREIGN KEY(`pricing_pricing_id`, `pricing_service_offered_service_id`, `pricing_service_offered_service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `pricing` (`pricing_id`, `service_offered_service_id`, `service_offered_service_provider_idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
--Table `findservice_freelance`.
`requests`
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
CREATE TABLE IF NOT EXISTS `findservice_freelance`.
`requests` (
    `request_id`
    INT NOT NULL AUTO_INCREMENT,
    `name`
    VARCHAR(45) NULL,
    `request_title`
    VARCHAR(100) NULL,
    `description`
    VARCHAR(200) NULL,
    `budget`
    VARCHAR(45) NULL,
    `delivery_date`
    VARCHAR(45) NULL,
    `service_provider_idservice_provider`
    INT NOT NULL,
    PRIMARY KEY(`request_id`, `service_provider_idservice_provider`),
    INDEX `fk_requests_service_provider1_idx` (`service_provider_idservice_provider`
        ASC) VISIBLE,
    CONSTRAINT `fk_requests_service_provider1`
    FOREIGN KEY(`service_provider_idservice_provider`) REFERENCES `findservice_freelance`.
    `service_provider` (`idservice_provider`) ON DELETE NO ACTION ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;