/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

USE sportix_arg;

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES 
-- State
(1,'BUENOS AIRES'),
(2,'CABA'),
(3,'CATAMARCA'),
(4,'CHACO'),
(5,'CHUBUT'),
(6,'CORDOBA'),
(7,'CORRIENTES'),
(8,'ENTRE RIOS'),
(9,'FORMOSA'),
(10,'JUJUY'),
(11,'LA PAMPA'),
(12,'LA RIOJA'),
(13,'MENDOZA'),
(14,'MISIONES'),
(15,'NEUQUEN'),
(16,'RIO NEGRO'),
(17,'SALTA'),
(18,'SAN JUAN'),
(19,'SAN LUIS'),
(20,'SANTA CRUZ'),
(21,'SANTA FE'),
(22,'SANTIAGO DEL ESTERO'),
(23,'TIERRA DEL FUEGO'),
(24,'TUCUMAN'),
(25,'OTRO');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES 
-- Country
(1,'Argentina'),
(2,'Bolivia'),
(3,'Colombia'),
(4,'Chile'),
(5,'Ecuador'),
(6,'CORDOBA'),
(7,'Paraguay'),
(8,'Perú'),
(9,'Uruguay'),
(10,'Venezuela'),
(11,'Otro');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES 
-- Gender
(1,'Masculino'),
(2,'Femenino'),
(3,'Otros'),
(4,'Unisex');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES 
-- Category
(1,'Indumentaria'),
(2,'Calzado'),
(3,'Accesorios'),
(4,'Otros');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES 
-- Brand
(1,'Adidas'),
(2,'Nike'),
(3,'Puma'),
(4,'Otro'),
(5,'Importado');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES 
-- Roles
(1,'Cliente'),
(2,'Admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES 
-- sizes
(1,'S'),
(2,'M'),
(3,'L'),
(4,'XL'),
(5,'40'),
(6,'41'),
(7,'42'),
(8,'43'),
(9,'44'),
(10,'45'),
(11,'46'),
(12,'30'),
(13,'31'),
(14,'32'),
(15,'33'),
(16,'34'),
(17,'35'),
(18,'36'),
(19,'37'),
(20,'38'),
(21,'39'),
(22,'XS');
(23,'Unico');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(1,'Lionel Messi','messi@gmail.com',1,'$2a$10$ham2wC5vR5UL4n2oqLeCuuHgD1s1WBtTsZaXJw','1987-06-24',1510202020,1,2,'on','1654962009039_img.jpg',2);
(2,'Juan Roman Riquelme','riquelme@gmail.com',1,'$2a$10$TIefwqRefVKQLwDemkvLMuK//TLPhGluFc/i6X','1987-06-24',1510101010,1,2,'on','1655056106130_img.jpg',1);
(3,"Facundo Rodriguez",'facu@gmail.com',1,'facundo123','2022-07-14',11111111,1,12,'on','1658602847250_img.jpg',2);
(4,"Alexis Sanchez",'asanchez@gmail.com',1,'$2a$10$cfoixhCT4UBCPzS2JyN1a.EZ8yO0Rj1P8MkhnC','1980-10-20',1156789546,5,25,'on','1660099752371_img.jpg',1);
(5,"Ronaldo de Assis Moreira",'ronaldinho@gmail.com',1,'$2a$10$U0J0wpqQLloQH3e57CqT5eBRFEEfx5f8pLmcPJ','1980-03-21',1167096795,3,25,'on','1660100283529_img.jpg',1);
(6,"Joaquin Braconi",'joaco@gmail.com',1,'$2a$10$q9xaD6hmAQe6y117njARi.EHBXfE0whGCsr4KG','2000-02-19',1143642464,1,19,'on','1660100431472_img.jpg',2);
(7,"Sakura Haruno",'sakura@gmail.com',2,'$2a$10$YzMVNEogfspIpT4iONCZqeVBanjoaO4AapMjNH','1990-02-21',2147483647,11,25,'on','1660100609706_img.jpg',1);
(8,"Gianluigi Buffon",'buffon@gmail.com',1,'$2a$10$SgoySJK/bN6xGKWm1eL79uVciILCuly9ZhYGlz','1978-01-28',2147483647,11,25,'on','1660100998406_img.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES 
(1,'Camiseta adidas Boca Juniors','Camiseta adidas Boca Juniors Primera Equipación 21/22',1,2,'2022-06-11',10999,1,1,'1654959687221_img_.jpg');
(2,'Zapatillas Puma R78 Future','De inspiración retro, pero con un estilo urbano y a la moda, las zapatillas iridiscentes R78 FUTURE son un básico moderno. Presentan un diseño de running tradicional, combinaciones de color originales y elementos de diseño clásicos. Este brillante modelo es impresionante.',2,8,'2022-06-13',7999,1,3,'1655151438981_img_.jpg');
(3,'Camiseta Nike FC Barcelona Primera Equipación','Anima a tu equipo con la camiseta de la primera equipación Match FC Barcelona. Está confeccionada con un tejido con capilarización del sudor para mantener la comodidad y la transpirabilidad tanto en el campo como en las gradas. Además, los detalles del equipo te permiten mostrar tu apoyo estés donde estés.',1,3,'2022-06-13',10800,1,2,'1655151512483_img_.jpg');
(4,"Bota Nike Phantom GT Academy Turf","Zapatilla de fútbol Nike Phantom GT2 Academy Turf para niños. Zapatillas de hilo para utilizar en campos de hierba artificial de cualquier generación, tierra o cemento. Zapatillas de gama baja  para jugadores de control y precisión.",2,3,'2022-07-29',11999,1,2,'1658248244038_img_.jpg');
(5,"Camiseta adidas Boca Juniors","Lleva los colores que más alegrías te dio en la Camiseta adidas Boca Juniors. Está elaborada en 100% poliéster y con un calce regular para brindarte mayor comodidad y poder utilizarla en la cancha, en tus partidos y en cualquier salida para mostrar tu pasión por el xeneize.",1,1,'2022-07-23',15399,2,1,'1660414605550_img_.jpg');
(6,"Pantalón Nike DriFit Strike","Domina la pelota con el Pantalón Nike Dri-Fit Strike. Su diseño práctico cuenta con dos cierres en los tobillos y su material elástico proporciona una prenda confortable que se convierte en el aliado ideal al momento del juego.",1,5,'2021-06-12',11499,2,2,'1660414692070_img_.jpg');
(7,"Short Nike Dri FIT Run","El pantalón corto Nike Dri-FIT Run ofrece gran rendimiento y ligereza.Los materiales transpirables mantienen la frescura y la comodidad en cada kilómetro.Este producto está fabricado con fibras de poliéster 100 % reciclado.",1,3,'2022-07-11',5329,1,2,'1660228524717_img_.jpg');
(8,"Camiseta adidas Real Madrid CF","Sencilla, clásica y creada para marcar un hito. Esta camiseta oficial de la primera equipación del Real Madrid luce un look atemporal con detalles en morado claro y el escudo del club repetido sobre un fondo blanco. Su diseño de alto rendimiento con tecnología de ventilación HEAT.RDY te permite emplearte a fondo en el terreno de juego. La inscripción '120 años' celebra 120 años de fútbol de primer nivel.",1,3,'2022-07-10',14000,1,1,'1660252277854_img_.jpg');
(9,"Buzo con Capucha Estampada Boca Juniors ADN","Se siente muy bien animar a tu club favorito. Este buzo con capucha adidas Boca Juniors en tejido de felpa francesa de algodón suave te hace sentir algo similar. Luce detalles del club y un llamativo estampado para irradiar lo que sentís por tu club en todo momento.",1,4,'2022-06-10',7800,1,1,'1660253254227_img_.jpg');
(10,"Guantes de Arquero DRB Feline","El guante de arquero Feline 20 PRO, ofrece un corte híbrido: Flat y Negativo, los dos tipos de guantes más usados por los arqueros en la actualidad. Permiten combinar la sensibilidad que ofrece el corte negativo para los dedos centrales, y la superficie que brinda el corte Flat para los dedos periféricos.Ofrece una muñeca larga más cómoda y anatómica que las tradicionales, logrando un guante que se ajusta a la mano tomando como fortaleza la zona de la muñeca. El Látex alemán de 4mm en palma, brinda la mejor calidad disponible para lograr las mejores prestaciones para el desempeño de la actividad a nivel profesional, baja absorción de humedad, mejor sujeción a la pelota, hacen de este guante un guante de calidad profesional.",3,1,'2022-03-25',15200,4,3,'1660253430901_img_.jpg');
(11,"Buzo Nike Paris Saint Germain Fleece Hoodie P","Los iconos mundiales París Saint-Germain y la franquicia Jordan colaboran y aúnan varios de sus elementos más reconocidos. La sudadera con capucha de tejido Fleece París Saint-Germain combina las icónicas líneas de corte Jordan con los colores de la primera equipación del París. Incluye una versión de la raya estilo Hechter del club y luce los colores del equipo con ribetes en contraste.",1,1,'2022-02-27',6500,2,2,'1660254814279_img_.jpg');
(12,"Calza Lotto Smart","La Calza Lotto Smart está confeccionada en poliéster para una mayor resistencia y durabilidad, además de brindarte el máximo confort diario. Su estilo regular y diseño liso te permite vestirla durante todo el día ya que es una prenda cómoda para entre casa como también para tus rutinas de entrenamiento.",1,1,'2022-08-12',3999,2,4,'1660413646485_img_.jpg');
(13,"Remera Lotto Athletic Classic IV","De corte regular, cuello redondo y un logo con estampado original que te hará salir de lo clásico, la Remera Lotto Athletic Classic IV, es un must que no puede faltar en tu guardarropas para todos los días. Su confeccion en algodón la hace una prenda fresca y suave al tacto.",1,1,'2022-08-13',1999,2,5,'1660413815899_img_.jpg');

/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;