-- State
INSERT INTO state (`id`,`name`) VALUES(1,'BUENOS AIRES');
INSERT INTO state(`id`,`name`) VALUES(2,'CABA');
INSERT INTO state (`id`,`name`) VALUES(3,'CATAMARCA');
INSERT INTO state (`id`,`name`) VALUES(4,'CHACO');
INSERT INTO state (`id`,`name`) VALUES(5,'CHUBUT');
INSERT INTO state (`id`,`name`) VALUES(6,'CORDOBA');
INSERT INTO state (`id`,`name`) VALUES(7,'CORRIENTES');
INSERT INTO state (`id`,`name`) VALUES(8,'ENTRE RIOS');
INSERT INTO state (`id`,`name`) VALUES(9,'FORMOSA');
INSERT INTO state (`id`,`name`) VALUES(10,'JUJUY');
INSERT INTO state (`id`,`name`) VALUES(11,'LA PAMPA');
INSERT INTO state (`id`,`name`) VALUES(12,'LA RIOJA');
INSERT INTO state (`id`,`name`) VALUES(13,'MENDOZA');
INSERT INTO state (`id`,`name`) VALUES(14,'MISIONES');
INSERT INTO state (`id`,`name`) VALUES(15,'NEUQUEN');
INSERT INTO state (`id`,`name`) VALUES(16,'RIO NEGRO');
INSERT INTO state (`id`,`name`) VALUES(17,'SALTA');
INSERT INTO state (`id`,`name`) VALUES(18,'SAN JUAN');
INSERT INTO state (`id`,`name`) VALUES(19,'SAN LUIS');
INSERT INTO state (`id`,`name`) VALUES(20,'SANTA CRUZ');
INSERT INTO state (`id`,`name`) VALUES(21,'SANTA FE');
INSERT INTO state (`id`,`name`) VALUES(22,'SANTIAGO DEL ESTERO');
INSERT INTO state (`id`,`name`) VALUES(23,'TIERRA DEL FUEGO');
INSERT INTO state (`id`,`name`) VALUES(24,'TUCUMAN');
INSERT INTO state (`id`,`name`) VALUES(25,'OTRO');

-- Country
INSERT INTO country (`id`,`name`) VALUES(1,'Argentina');
INSERT INTO country (`id`,`name`) VALUES(2,'Bolivia');
INSERT INTO country (`id`,`name`) VALUES(3,'Colombia');
INSERT INTO country (`id`,`name`) VALUES(4,'Chile');
INSERT INTO country (`id`,`name`) VALUES(5,'Ecuador');
INSERT INTO country (`id`,`name`) VALUES(6,'CORDOBA');
INSERT INTO country (`id`,`name`) VALUES(7,'Paraguay');
INSERT INTO country (`id`,`name`) VALUES(8,'Perú');
INSERT INTO country (`id`,`name`) VALUES(9,'Uruguay');
INSERT INTO country (`id`,`name`) VALUES(10,'Venezuela');
INSERT INTO country (`id`,`name`) VALUES(11,'Otro');

-- Gender
INSERT INTO gender (`id`,`name`) VALUES(1,'Masculino');
INSERT INTO gender (`id`,`name`) VALUES(2,'Femenino');
INSERT INTO gender (`id`,`name`) VALUES(3,'Otros');
INSERT INTO gender (`id`,`name`) VALUES(4,'Unisex');

-- Category
INSERT INTO category (`id`,`name`) VALUES(1,'Indumentaria');
INSERT INTO category (`id`,`name`) VALUES(2,'Calzado');
INSERT INTO category (`id`,`name`) VALUES(3,'Accesorios');
INSERT INTO category (`id`,`name`) VALUES(4,'Otros');

-- Brand
INSERT INTO brand (`id`,`name`) VALUES(1,'Adidas');
INSERT INTO brand (`id`,`name`) VALUES(2,'Nike');
INSERT INTO brand (`id`,`name`) VALUES(3,'Puma');
INSERT INTO brand (`id`,`name`) VALUES(4,'Otro');
INSERT INTO brand (`id`,`name`) VALUES(5,'Importado');

-- Roles
INSERT INTO roles (`id`,`name`) VALUES(1,'Cliente');
INSERT INTO roles (`id`,`name`) VALUES(2,'Admin');

-- sizes
INSERT INTO sizes (`id`,`sizes`) VALUES(1,'S');
INSERT INTO sizes (`id`,`sizes`) VALUES(2,'M');
INSERT INTO sizes (`id`,`sizes`) VALUES(3,'L');
INSERT INTO sizes (`id`,`sizes`) VALUES(4,'XL');
INSERT INTO sizes (`id`,`sizes`) VALUES(5,'40');
INSERT INTO sizes (`id`,`sizes`) VALUES(6,'41');
INSERT INTO sizes (`id`,`sizes`) VALUES(7,'42');
INSERT INTO sizes (`id`,`sizes`) VALUES(8,'43');
INSERT INTO sizes (`id`,`sizes`) VALUES(9,'44');
INSERT INTO sizes (`id`,`sizes`) VALUES(10,'45');
INSERT INTO sizes (`id`,`sizes`) VALUES(11,'46');
INSERT INTO sizes (`id`,`sizes`) VALUES(12,'30');
INSERT INTO sizes (`id`,`sizes`) VALUES(13,'31');
INSERT INTO sizes (`id`,`sizes`) VALUES(14,'32');
INSERT INTO sizes (`id`,`sizes`) VALUES(15,'33');
INSERT INTO sizes (`id`,`sizes`) VALUES(16,'34');
INSERT INTO sizes (`id`,`sizes`) VALUES(17,'35');
INSERT INTO sizes (`id`,`sizes`) VALUES(18,'36');
INSERT INTO sizes (`id`,`sizes`) VALUES(19,'37');
INSERT INTO sizes (`id`,`sizes`) VALUES(20,'38');
INSERT INTO sizes (`id`,`sizes`) VALUES(21,'39');
INSERT INTO sizes (`id`,`sizes`) VALUES(22,'XS');

/*
-- Query: SELECT * FROM sportix_arg.users
LIMIT 0, 1000

-- Date: 2022-07-10 00:40
*/
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (1,'Lionel Messi','messi@gmail.com',1,'$2a$10$ham2wC5vR5UL4n2oqLeCuuHgD1s1WBtTsZaXJw','1987-06-24',1510202020,1,2,'on','1654962009039_img.jpg',2);
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (2,'Juan Roman Riquelme','riquelme@gmail.com',1,'$2a$10$TIefwqRefVKQLwDemkvLMuK//TLPhGluFc/i6X','1987-06-24',1510101010,1,2,'on','1655056106130_img.jpg',1);


/*
-- Query: SELECT * FROM sportix_arg.productos
LIMIT 0, 1000

-- Date: 2022-07-10 00:39
*/
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (1,'Camiseta adidas Boca Juniors','Camiseta adidas Boca Juniors Primera Equipación 21/22',1,2,'2022-06-11',10999,1,1,'1654959687221_img_.jpg');
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (2,'Zapatillas Puma R78 Future','De inspiración retro, pero con un estilo urbano y a la moda, las zapatillas iridiscentes R78 FUTURE son un básico moderno. Presentan un diseño de running tradicional, combinaciones de color originales y elementos de diseño clásicos. Este brillante modelo es impresionante.',2,8,'2022-06-13',7999,1,3,'1655151438981_img_.jpg');
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (3,'Camiseta Nike FC Barcelona Primera Equipación','Anima a tu equipo con la camiseta de la primera equipación Match FC Barcelona. Está confeccionada con un tejido con capilarización del sudor para mantener la comodidad y la transpirabilidad tanto en el campo como en las gradas. Además, los detalles del equipo te permiten mostrar tu apoyo estés donde estés.',1,3,'2022-06-13',10800,1,2,'1655151512483_img_.jpg');
