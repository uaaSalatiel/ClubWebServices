-- MySQL Script generated by MySQL Workbench
-- Fri Jun  7 17:51:26 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id_usr` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Nombres` VARCHAR(45) NOT NULL,
  `Apellidos` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(60) NOT NULL,
  `admin` CHAR(1) NOT NULL,
  PRIMARY KEY (`id_usr`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`amigo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`amigo` (
  `id_usr1` SMALLINT(5) UNSIGNED NOT NULL,
  `id_usr2` SMALLINT(5) UNSIGNED NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id_usr1`, `id_usr2`),
  INDEX `fk_usuario_has_usuario_usuario1_idx` (`id_usr2` ASC) VISIBLE,
  INDEX `fk_usuario_has_usuario_usuario_idx` (`id_usr1` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_usuario_usuario`
    FOREIGN KEY (`id_usr1`)
    REFERENCES `mydb`.`usuario` (`id_usr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_usuario_usuario1`
    FOREIGN KEY (`id_usr2`)
    REFERENCES `mydb`.`usuario` (`id_usr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`evento` (
  `id_ev` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  PRIMARY KEY (`id_ev`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`asistencia_ev`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`asistencia_ev` (
  `id_usr` SMALLINT(5) UNSIGNED NOT NULL,
  `id_ev` SMALLINT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_usr`, `id_ev`),
  INDEX `fk_usuario_has_evento_evento1_idx` (`id_ev` ASC) VISIBLE,
  INDEX `fk_usuario_has_evento_usuario1_idx` (`id_usr` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_evento_usuario1`
    FOREIGN KEY (`id_usr`)
    REFERENCES `mydb`.`usuario` (`id_usr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_evento_evento1`
    FOREIGN KEY (`id_ev`)
    REFERENCES `mydb`.`evento` (`id_ev`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`restaurante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`restaurante` (
  `id_res` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `hora_ini` TIME NOT NULL,
  `hora_fin` TIME NOT NULL,
  PRIMARY KEY (`id_res`),
  UNIQUE INDEX `ubicacion_UNIQUE` (`ubicacion` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`menu` (
  `id_menu` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha_ini` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `id_res` INT NOT NULL,
  PRIMARY KEY (`id_menu`, `id_res`),
  INDEX `fk_menu_restaurante1_idx` (`id_res` ASC) VISIBLE,
  CONSTRAINT `fk_menu_restaurante1`
    FOREIGN KEY (`id_res`)
    REFERENCES `mydb`.`restaurante` (`id_res`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actividad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actividad` (
  `id_act` SMALLINT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `lunes` TINYINT(1) NOT NULL,
  `martes` TINYINT(1) NOT NULL,
  `miercoles` TINYINT(1) NOT NULL,
  `jueves` TINYINT(1) NOT NULL,
  `sabado` TINYINT(1) NOT NULL,
  `domingo` TINYINT(1) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_act`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`asistencia_ac`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`asistencia_ac` (
  `id_usr` SMALLINT(5) UNSIGNED NOT NULL,
  `id_act` SMALLINT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_usr`, `id_act`),
  INDEX `fk_usuario_has_actividad_actividad1_idx` (`id_act` ASC) VISIBLE,
  INDEX `fk_usuario_has_actividad_usuario1_idx` (`id_usr` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_actividad_usuario1`
    FOREIGN KEY (`id_usr`)
    REFERENCES `mydb`.`usuario` (`id_usr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_actividad_actividad1`
    FOREIGN KEY (`id_act`)
    REFERENCES `mydb`.`actividad` (`id_act`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reserva` (
  `id_usr` SMALLINT(5) UNSIGNED NOT NULL,
  `id_res` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `hora` VARCHAR(6) NOT NULL,
  `reservacol` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usr`, `id_res`),
  INDEX `fk_usuario_has_restaurante_restaurante1_idx` (`id_res` ASC) VISIBLE,
  INDEX `fk_usuario_has_restaurante_usuario1_idx` (`id_usr` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_restaurante_usuario1`
    FOREIGN KEY (`id_usr`)
    REFERENCES `mydb`.`usuario` (`id_usr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_restaurante_restaurante1`
    FOREIGN KEY (`id_res`)
    REFERENCES `mydb`.`restaurante` (`id_res`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
