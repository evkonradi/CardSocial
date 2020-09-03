use card_social_db;

-- login: gregset@myhouse.com, password: greg_s
INSERT INTO card_social_db.user (first_name, last_name, nickname, home_address, business_name, business_address, position, personal_phone, business_phone, business_phone_ext, personal_email, business_email, junk_email, business_url, linkedIn_url, instagram_url, facebook_url, twitter_url, bio, slogan, pwd)
VALUES ('Greg','Stevak','Superman','1212 Stency Street, Houston, TX, 75644','Gregs Fast Delivery','2345 Avery dr., Houston, TX, 44533','Founder, CEO','7972561256','5124875699','458','gregset@myhouse.com',
'gregdeliver@mybusiness.com','gregfunny@yahoo.com','fastdeliverygreg.com','http://linkedin.com/gregfastdelivery/','http://instagram.com/gregfastdelivery/','http://facebook.com/gregfastdelivery/','https://twitter.com/gregfastdelivery/',
'I am a founder of a very cool company.','Fastest in the universe!','$2b$10$QQhVv/tSFlhXQhZZCXf/Ye2x3.fxkgdaUqrRcugg.n9hviO0UHJ6i');

-- login: alisa@myhouse.com, password: alisa_s
INSERT INTO card_social_db.user (first_name, last_name, nickname, home_address, business_name, business_address, position, personal_phone, business_phone, business_phone_ext, personal_email, business_email, junk_email, business_url, linkedIn_url, instagram_url, facebook_url, twitter_url, bio, slogan, pwd)
values ('Alisa','Stovs',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'alisa@myhouse.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$9lZoZO5YvsxN9ZMcGjZKC.4UISaDNbP2zSYYPIxNyy8jGe2Xja5oa');

-- login: stephen@yahoo.com, password: stephen_s
INSERT INTO card_social_db.user (first_name, last_name, nickname, home_address, business_name, business_address, position, personal_phone, business_phone, business_phone_ext, personal_email, business_email, junk_email, business_url, linkedIn_url, instagram_url, facebook_url, twitter_url, bio, slogan, pwd)
values('Stephen','Sovkov',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'stephen@yahoo.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'$2b$10$tKSYR1RTcAOHhguOdTYP9OfCu2bCuIegvugGqOA3DLhSlQEQYECgK');

INSERT INTO card_social_db.font (font_name, font_size, font_decoration)
VALUES('Helvetica', 12, 'I');

INSERT INTO card_social_db.font (font_name, font_size, font_decoration)
VALUES('Times New Roman', 12, 'B');

INSERT INTO card_social_db.background (background_name, background_color)
VALUES('Personal', 'light_blue');

INSERT INTO card_social_db.background (background_name, background_color)
VALUES('Business', 'green');

INSERT INTO card_social_db.icon (icon_name, icon_path)
VALUES('IconA', './public/assets/IconA');

INSERT INTO card_social_db.icon (icon_name, icon_path)
VALUES('IconB', './public/assets/IconB');

INSERT INTO card_social_db.card (card_code, user_id, card_title, font_id, background_id, icon_id, show_first_name, show_last_name, show_nickname, show_home_address, show_business_name, show_business_address, show_position, show_personal_phone, show_business_phone, show_business_phone_ext, show_personal_email, show_business_email, show_junk_email, show_business_url, show_linkedin_url, show_instagram_url, show_facebook_url, show_twitter_url, show_bio, show_slogan)
VALUES('VGQgNC', 1, 'My Card', 1, 1, 1, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);