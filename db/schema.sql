`DROP DATABASE IF EXISTS articles_db;
CREATE DATABASE articles_db;

USE articles_db;

CREATE TABLE articles(
id int(11) NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
keyword_1 varchar (255) NOT NULL,
keyword_2 varchar (255) NOT NULL,
article text NOT NULL,
PRIMARY KEY (id)
)
''
