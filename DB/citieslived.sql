-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema citiesliveddb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `citiesliveddb` ;

-- -----------------------------------------------------
-- Schema citiesliveddb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `citiesliveddb` DEFAULT CHARACTER SET utf8 ;
USE `citiesliveddb` ;

-- -----------------------------------------------------
-- Table `city`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `city` ;

CREATE TABLE IF NOT EXISTS `city` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  `address` VARCHAR(100) NULL,
  `state` VARCHAR(100) NULL,
  `postal_code` VARCHAR(45) NULL,
  `country` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `state`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `state` ;

CREATE TABLE IF NOT EXISTS `state` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` INT NOT NULL,
  `street` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `country`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `country` ;

CREATE TABLE IF NOT EXISTS `country` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS citiesliveduser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'citiesliveduser'@'localhost' IDENTIFIED BY 'citiesliveduser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'citiesliveduser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `city`
-- -----------------------------------------------------
START TRANSACTION;
USE `citiesliveddb`;
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (1, 'Salinas', '731 Geneva Way', 'California', '93907', 'United States');
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (2, 'San Diego', '11513 Windy Ridge Way', 'California', '92126', 'United States');
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (3, 'Jacksonville', '2917 Algonquin Ave', 'Florida', '32210', 'United States');
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (4, 'Orange Park', '198 Arora Blvd', 'Florida', '32073', 'United States');
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (5, 'Fruit Cove', '118 Queen Victoria Ave', 'Florida', '32259', 'United States');
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (6, 'Homestead', '1742 NE 8th Street', 'Florida', '33033', 'United States');
INSERT INTO `city` (`id`, `name`, `address`, `state`, `postal_code`, `country`) VALUES (7, 'Homestead', '1413 SE 26th Ave', 'Florida', '33035', 'United States');

COMMIT;


-- -----------------------------------------------------
-- Data for table `state`
-- -----------------------------------------------------
START TRANSACTION;
USE `citiesliveddb`;
INSERT INTO `state` (`id`, `name`) VALUES (1, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `country`
-- -----------------------------------------------------
START TRANSACTION;
USE `citiesliveddb`;
INSERT INTO `country` (`id`, `name`) VALUES (1, 'United States');

COMMIT;

