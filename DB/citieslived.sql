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
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS cluser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'cluser'@'localhost' IDENTIFIED BY 'CLUSER';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'cluser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `city`
-- -----------------------------------------------------
START TRANSACTION;
USE `citiesliveddb`;
INSERT INTO `city` (`id`, `name`) VALUES (1, 'Salinas');

COMMIT;

