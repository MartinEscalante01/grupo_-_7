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
INSERT INTO category (`id`,`category`) VALUES(1,'Indumentaria');
INSERT INTO category (`id`,`category`) VALUES(2,'Calzado');
INSERT INTO category (`id`,`category`) VALUES(3,'Accesorios');
INSERT INTO category (`id`,`category`) VALUES(4,'Otros');

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
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (3,"Facundo Rodriguez",'facu@gmail.com',1,'facundo123','2022-07-14',11111111,1,12,'on','1658602847250_img.jpg',2);
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (4,"Alexis Sanchez",'asanchez@gmail.com',1,'$2a$10$cfoixhCT4UBCPzS2JyN1a.EZ8yO0Rj1P8MkhnC','1980-10-20',1156789546,5,25,'on','1660099752371_img.jpg',1);
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (5,"Ronaldo de Assis Moreira",'ronaldinho@gmail.com',1,'$2a$10$U0J0wpqQLloQH3e57CqT5eBRFEEfx5f8pLmcPJ','1980-03-21',1167096795,3,25,'on','1660100283529_img.jpg',1);
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (6,"Joaquin Braconi",'joaco@gmail.com',1,'$2a$10$q9xaD6hmAQe6y117njARi.EHBXfE0whGCsr4KG','2000-02-19',1143642464,1,19,'on','1660100431472_img.jpg',2);
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (7,"Sakura Haruno",'sakura@gmail.com',2,'$2a$10$YzMVNEogfspIpT4iONCZqeVBanjoaO4AapMjNH','1990-02-21',2147483647,11,25,'on','1660100609706_img.jpg',1);
INSERT INTO users (`id`,`fullName`,`email`,`idGender`,`password`,`birthday`,`phone`,`idCountry`,`idState`,`newsletter`,`file`,`idRoles`) VALUES (8,"Gianluigi Buffon",'buffon@gmail.com',1,'$2a$10$SgoySJK/bN6xGKWm1eL79uVciILCuly9ZhYGlz','1978-01-28',2147483647,11,25,'on','1660100998406_img.jpg',1);












/*
-- Query: SELECT * FROM sportix_arg.productos
LIMIT 0, 1000

-- Date: 2022-07-10 00:39
*/
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (1,'Camiseta adidas Boca Juniors','Camiseta adidas Boca Juniors Primera Equipación 21/22',1,2,'2022-06-11',10999,1,1,'1654959687221_img_.jpg');
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (2,'Zapatillas Puma R78 Future','De inspiración retro, pero con un estilo urbano y a la moda, las zapatillas iridiscentes R78 FUTURE son un básico moderno. Presentan un diseño de running tradicional, combinaciones de color originales y elementos de diseño clásicos. Este brillante modelo es impresionante.',2,8,'2022-06-13',7999,1,3,'1655151438981_img_.jpg');
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (3,'Camiseta Nike FC Barcelona Primera Equipación','Anima a tu equipo con la camiseta de la primera equipación Match FC Barcelona. Está confeccionada con un tejido con capilarización del sudor para mantener la comodidad y la transpirabilidad tanto en el campo como en las gradas. Además, los detalles del equipo te permiten mostrar tu apoyo estés donde estés.',1,3,'2022-06-13',10800,1,2,'1655151512483_img_.jpg');
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (4,"Bota Nike Phantom GT Academy Turf","Zapatilla de fútbol Nike Phantom GT2 Academy Turf para niños. Zapatillas de hilo para utilizar en campos de hierba artificial de cualquier generación, tierra o cemento. Zapatillas de gama baja  para jugadores de control y precisión.",2,3,2022-07-29,11999,1,2,1658248244038_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (5,"Camiseta adidas Boca Juniors","Lleva los colores que más alegrías te dio en la Camiseta adidas Boca Juniors. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en la cancha, en tus partidos y en cualquier salida para mostrar tu pasión por el xeneize.",1,1,2022-07-23,15399,2,1,1660414605550_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (6,"Pantalón Nike DriFit Strike","Domina la pelota con el Pantalón Nike Dri-Fit Strike. Su diseño práctico cuenta con dos cierres en los tobillos y su material elástico proporciona una prenda confortable que se convierte en el aliado ideal al momento del juego.",1,5,2021-06-12,11499,2,2,1660414692070_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (7,"Short Nike Dri FIT Run","El pantalón corto Nike Dri-FIT Run ofrece gran rendimiento y ligereza.Los materiales transpirables mantienen la frescura y la comodidad en cada kilómetro.Este producto está fabricado con fibras de poliéster 100 % reciclado.",1,3,2022-07-11,5329,1,2,1660228524717_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (8,"Camiseta adidas Real Madrid CF","Sencilla, clásica y creada para marcar un hito. Esta camiseta oficial de la primera equipación del Real Madrid luce un look atemporal con detalles en morado claro y el escudo del club repetido sobre un fondo blanco. Su diseño de alto rendimiento con tecnología de ventilación HEAT.RDY te permite emplearte a fondo en el terreno de juego. La inscripción '120 años' celebra 120 años de fútbol de primer nivel.",1,3,2022-07-10,14000,1,1,1660252277854_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (9,"Buzo con Capucha Estampada Boca Juniors ADN","Se siente muy bien animar a tu club favorito. Este buzo con capucha adidas Boca Juniors en tejido de felpa francesa de algodón suave te hace sentir algo similar. Luce detalles del club y un llamativo estampado para irradiar lo que sentís por tu club en todo momento.",1,4,2022-06-10,7800,1,1,1660253254227_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (10,"Guantes de Arquero DRB Feline","El guante de arquero Feline 20 PRO, ofrece un corte híbrido: Flat y Negativo, los dos tipos de guantes más usados por los arqueros en la actualidad. Permiten combinar la sensibilidad que ofrece el corte negativo para los dedos centrales, y la superficie que brinda el corte Flat para los dedos periféricos.Ofrece una muñeca larga más cómoda y anatómica que las tradicionales, logrando un guante que se ajusta a la mano tomando como fortaleza la zona de la muñeca. El Látex alemán de 4mm en palma, brinda la mejor calidad disponible para lograr las mejores prestaciones para el desempeño de la actividad a nivel profesional, baja absorción de humedad, mejor sujeción a la pelota, hacen de este guante un guante de calidad profesional.",3,1,2022-03-25,15200,4,3,1660253430901_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (11,"Buzo Nike Paris Saint Germain Fleece Hoodie P","Los iconos mundiales París Saint-Germain y la franquicia Jordan colaboran y aúnan varios de sus elementos más reconocidos. La sudadera con capucha de tejido Fleece París Saint-Germain combina las icónicas líneas de corte Jordan con los colores de la primera equipación del París. Incluye una versión de la raya estilo Hechter del club y luce los colores del equipo con ribetes en contraste.",1,1,2022-02-27,6500,2,2,1660254814279_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (12,"Calza Lotto Smart","La Calza Lotto Smart está confeccionada en poliéster para una mayor resistencia y durabilidad, además de brindarte el máximo confort diario. Su estilo regular y diseño liso te permite vestirla durante todo el día ya que es una prenda cómoda para entre casa como también para tus rutinas de entrenamiento.",1,1,2022-08-12,3999,2,4,1660413646485_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (13,"Remera Lotto Athletic Classic IV","De corte regular, cuello redondo y un logo con estampado original que te hará salir de lo clásico, la Remera Lotto Athletic Classic IV, es un must que no puede faltar en tu guardarropas para todos los días. Su confeccion en algodón la hace una prenda fresca y suave al tacto.",1,1,2022-08-13,1999,2,5,1660413815899_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (14,"Zapatillas Topper Wind Iv","Las Zapatillas Topper Wind Iv cuentan con una capellada de cuero sintético de alta calidad para mejorar la sujeción y durabilidad del calzado. Su suela construida en goma protege las rodillas y su entresuela de EVA suaviza la presión de los impactos para mayor confort y seguridad en cada pisada.",2,18,2022-02-09,12199,2,4,1660413911312_img_.jpg)
INSERT INTO productos (`id`,`name`,`description`,`category`,`size`,`date`,`price`,`gender`,`brand`,`file`) VALUES (15,"Zapatillas Topper Jiro","Las zapatillas Topper Jiro están confeccionadas en materiales que la vuelven más liviana y duradera para el uso diario. Su ajuste con cordones se combina con una suela de goma que ofrece la adherencia que tus pisadas necesitan.",2,19,2022-05-08,5599,2,4,1660413993022_img_.jpg)
