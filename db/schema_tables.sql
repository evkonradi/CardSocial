USE card_social_db;

DROP TABLE IF EXISTS card_social_db.rolodex;
DROP TABLE IF EXISTS card_social_db.card;
DROP TABLE IF EXISTS card_social_db.card_background;
DROP TABLE IF EXISTS card_social_db.card_font;
DROP TABLE IF EXISTS card_social_db.card_icon;
DROP TABLE IF EXISTS card_social_db.user;

CREATE TABLE card_social_db.card_background (
id INT NOT NULL AUTO_INCREMENT,
bg_name VARCHAR(45) NOT NULL,
bg_color VARCHAR(20) NOT NULL,
PRIMARY KEY (id));

CREATE TABLE card_social_db.card_font (
id INT NOT NULL AUTO_INCREMENT,
font_name VARCHAR(45) NOT NULL,
font_size INT NOT NULL,
font_decoration CHAR(1),
PRIMARY KEY (id));

CREATE TABLE card_social_db.card_icon (
id INT NOT NULL AUTO_INCREMENT,
icon_name VARCHAR(45) NOT NULL,
icon_path VARCHAR(100) NOT NULL,
PRIMARY KEY (id));

CREATE TABLE card_social_db.user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  nickname VARCHAR(45) NULL,
  home_address VARCHAR(150) NULL,
  business_name VARCHAR(100) NULL,
  business_address VARCHAR(150) NULL,
  position VARCHAR(60) NULL,
  personal_phone VARCHAR(10) NULL,
  business_phone VARCHAR(10) NULL,
  business_phone_ext VARCHAR(5) NULL,
  personal_email VARCHAR(60) NOT NULL,
  business_email VARCHAR(60) NULL,
  junk_email VARCHAR(60) NULL,
  business_url VARCHAR(100) NULL,
  linkedIn_url VARCHAR(100) NULL,
  instagram_url VARCHAR(100) NULL,
  facebook_url VARCHAR(100) NULL,
  twitter_url VARCHAR(100) NULL,
  bio VARCHAR(300) NULL,
  slogan VARCHAR(100) NULL,
  pwd VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY user_personal_email_unique (personal_email));


CREATE TABLE card_social_db.card (
  id INT NOT NULL AUTO_INCREMENT,
  card_code VARCHAR(20) NOT NULL UNIQUE KEY,
  templateTitle VARCHAR(100) NOT NULL,
  user_id INTEGER NOT NULL,
  card_background_id INTEGER,
  card_font_id INTEGER,
  card_icon_id INTEGER,
  show_first_name BOOLEAN NOT NULL,
  show_last_name BOOLEAN NOT NULL,
  show_nickname BOOLEAN NOT NULL,
  show_home_address BOOLEAN NOT NULL,
  show_business_name BOOLEAN NOT NULL,
  show_business_address BOOLEAN NOT NULL,
  show_position BOOLEAN NOT NULL,
  show_personal_phone BOOLEAN NOT NULL,
  show_business_phone BOOLEAN NOT NULL,
  show_business_phone_ext BOOLEAN NOT NULL,
  show_personal_email BOOLEAN NOT NULL,
  show_business_email BOOLEAN NOT NULL,
  show_junk_email BOOLEAN NOT NULL,
  show_business_url BOOLEAN NOT NULL,
  show_linkedIn_url BOOLEAN NOT NULL,
  show_instagram_url BOOLEAN NOT NULL,
  show_facebook_url BOOLEAN NOT NULL,
  show_twitter_url BOOLEAN NOT NULL,
  show_bio BOOLEAN NOT NULL,
  show_slogan BOOLEAN NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_card_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  CONSTRAINT fk_card_card_background FOREIGN KEY (card_background_id) REFERENCES card_background(id) ON DELETE SET NULL,
  CONSTRAINT fk_card_card_font FOREIGN KEY (card_font_id) REFERENCES card_font(id) ON DELETE SET NULL,
  CONSTRAINT fk_card_card_icon FOREIGN KEY (card_icon_id) REFERENCES card_icon(id) ON DELETE SET NULL);

CREATE TABLE card_social_db.rolodex (
  user_id INTEGER NOT NULL,
  card_id INTEGER NOT NULL,
  PRIMARY KEY (user_id, card_id),
  CONSTRAINT fk_rolodex_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  CONSTRAINT fk_rolodex_card FOREIGN KEY (card_id) REFERENCES card(id) ON DELETE CASCADE);
