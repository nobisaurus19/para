DROP DATABASE IF EXISTS Kohub;

CREATE DATABASE IF NOT EXISTS `Kohub` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE `Kohub`;

CREATE TABLE IF NOT EXISTS `users` (
    userId int NOT NULL AUTO_INCREMENT,
    userName Varchar(100) NOT NULL,
    email Varchar(100) NOT NULL,
    password Varchar(100) NOT NULL,
    role Varchar(45) DEFAULT 'user',
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS `coworking` (
    placeId int NOT NULL AUTO_INCREMENT,
    placeName VARCHAR(100) NOT NULL,
    descr VARCHAR(999) NOT NULL,
    rating int NOT NULL,
    seat int NOT NULL,
    parking int NOT NULL,
    freewifi int NOT NULL,
    charging int NOT NULL,
    food int NOT NULL,
    bakery int NOT NULL,
    meetingroom int NOT NULL,
    quietzone int NOT NULL,
    smokezone int NOT NULL,
    locate VARCHAR(100) NOT NULL,
    map VARCHAR(999) NOT NULL,
    image VARCHAR(199) NOT NULL,
    PRIMARY KEY (placeId)
);

INSERT INTO `users` (`userName`, `email`, `password`, `role`) 
VALUES 
('PorameeA', 'PorameeA@example.com' ,'password007', 'admin'),
('PawitaP', 'PawitaP@example.com','password060','admin'),
('KanyanutS', 'KanyanutS@example.com','password083','admin'),
('ChanayachaS', 'ChanayachaS@example.com', 'password098', 'admin'),
('PattanunW', 'PattanunW@example.com', 'password148', 'admin'),
('JidapaK', 'JidapaK@example.com', 'passwordAJ', 'admin'),
('sarahjones', 'sarahjones@example.com', 'passwordjkl', 'user'),
('markbrown','markbrown@example.com','passwordmno', 'user'),
('ellencarter','ellencarter@example.com', 'passwordpqr', 'user'),
('peterparker','peterparker@example.com', 'passwordstu', 'user'),
('johnsmith','johnsmith@example.com', 'password123', 'user');


DROP DATABASE IF EXISTS Kohub;

CREATE DATABASE IF NOT EXISTS `Kohub` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE `Kohub`;

CREATE TABLE IF NOT EXISTS `users` (
    userId int NOT NULL AUTO_INCREMENT,
    userName Varchar(100) NOT NULL,
    fullName Varchar(100) NOT NULL,
    email Varchar(100) NOT NULL,
    phonenum CHAR(10) NOT NULL,
    password Varchar(100) NOT NULL,
    role Varchar(45) DEFAULT 'user',
    PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS `coworking` (
    placeId int NOT NULL AUTO_INCREMENT,
    placeName VARCHAR(100) NOT NULL,
    descr VARCHAR(8000) NOT NULL,
    rating int NOT NULL,
    seat int NOT NULL,
    parking boolean NOT NULL Default 0,
    freewifi boolean NOT NULL Default 0,
    charging boolean NOT NULL Default 0,
    food boolean NOT NULL Default 0,
    bakery boolean NOT NULL Default 0,
    meetingroom boolean NOT NULL Default 0,
    quietzone boolean NOT NULL Default 0,
    smokezone boolean NOT NULL Default 0,
    locate VARCHAR(8000) NOT NULL,
    image VARCHAR(199) NOT NULL,
    map VARCHAR(999),
    PRIMARY KEY (placeId)
);


INSERT INTO `users` (`userName`, `fullName`, `email`,`phonenum`, `password`, `role`) 
VALUES 
('PorameeA', 'Poramee Apireadeewajeeset', 'PorameeA@example.com', '0990810000' ,'1234', 'admin'),
('PawitaP', 'Pawita Pongpaew', 'PawitaP@example.com', '0990811233','1234','admin'),
('KanyanatS', 'Kanyanat Sompong', 'KanyanatS@example.com', '0990813233','1234','admin'),
('ChanayachaS', 'Chanayacha Suriyasoonthorn', 'ChanayachaS@example.com','0990814444', '1234', 'admin'),
('PattanunW', 'Pattanun Worakitsitthisatorn', 'PattanunW@example.com','0990810555', '1234', 'admin'),
('JidapaK', 'Jidapa Kraisangka', 'JidapaK@example.com','0990813212', '1234', 'admin'),
('sarahjones', 'Sarah Jones', 'sarahjones@example.com','0990813231', '1234', 'user'),
('markbrown', 'Mark Brown', 'markbrown@example.com','0990817806','1234', 'user'),
('ellencarter', 'Ellen Carter', 'ellencarter@example.com','0990813666', '1234', 'user'),
('peterparker', 'Peter Parker', 'peterparker@example.com','0990812222', '1234', 'user'),
('johnsmith', 'John Smith', 'johnsmith@example.com','0990819999', '1234', 'user');

INSERT INTO `coworking` (`placeName`, `descr`, `rating`, `seat`, `parking`, `freewifi`, `charging`, `food`, `bakery`, `meetingroom`, `quietzone`, `smokezone`, `locate`, `image`)
VALUES 
('BIGWork', 'The Work Spot is a stylish and comfortable coworking space that caters to freelancers, entrepreneurs, and small businesses. Our modern and cozy workspace is designed to help you stay focused and productive, with amenities like high-speed internet, printing and scanning services, and free coffee and tea. Whether you need a quiet spot to work solo or a collaborative environment to meet and network with other professionals, The Work Spot has everything you need to succeed. Contact us today to book your spot!', 4.5, 30, 1, 1, 1, 1, 0, 1, 1, 0, 'Bang Rak,Bangkok', 'https://m1r.ai/9/58mzj.JPG'),
('C asean Samyan CO-OP', 'C asean Samyan CO-OP is a modern coworking space located in the heart of Bangkok. With a sleek and stylish interior design, C asean Samyan CO-OP provides a comfortable and inspiring work environment for freelancers, entrepreneurs, and startups. The space is equipped with high-speed internet, ample seating, and a variety of amenities, including a kitchenette, meeting rooms, and quiet zones.', 4, 100, 1, 1, 1, 1, 0, 1, 1, 0, '1583 Rama IV Rd, Wang Mai, Pathum Wan,Bangkok 10330', 'https://m1r.ai/9/rty0i.png'),
('Launchpad', 'The Launchpad is a coworking space designed for creative professionals who are looking for a flexible and inspiring workspace. Our open-plan office is flooded with natural light and features comfortable workstations, meeting rooms, and private offices. We provide high-speed internet, printing and scanning services, and free coffee and tea to keep you energized and focused. Our community is made up of designers, writers, developers, and entrepreneurs who are passionate about their work and are always eager to collaborate and share ideas. Join us and take your business to the next level!', 4.2, 40, 0, 1, 0, 1, 1, 1, 1, 0, ' Bang Rak,Bangkok ', 'https://m1r.ai/9/okqe5.jpg'),
('RID Workspace', 'The RID Workspace is a coworking space that offers a professional and productive environment for entrepreneurs, small businesses, and remote workers. Our space features modern and ergonomic workstations, private offices, meeting rooms, and a lounge area. We provide high-speed internet, printing and scanning services, and free coffee and tea to keep you fueled throughout the day. Our community is full of diverse professionals who are always willing to connect and collaborate. Join us and take your business to the next level!', 4.0, 25, 1, 1, 1, 0, 0, 1, 1, 0, ' Dusit,Bangkok', 'https://m1r.ai/9/t0x2j.jpg'),
('Hive Thonglor', 'The Hive Thonglor is a trendy and modern co-working space located in the heart of Bangkok. With over 500 seats available, it offers a variety of spaces for freelancers and entrepreneurs to work, network, and collaborate. The Hive Thonglor also features a rooftop bar and lounge, perfect for unwinding after a productive day of work.', 4, 500, 1, 1, 1, 1, 1, 1, 1, 0, 'Watthana, Bangkok', 'https://m1r.ai/9/mxn7m.jpg'),
('Hubba Thailand', 'Hubba Thailand is a vibrant co-working space with locations in both Bangkok and Chiang Mai. With over 1,000 members and counting, it is a popular choice for entrepreneurs, creatives, and remote workers looking for a supportive community and inspiring environment. Hubba Thailand also offers a range of events and workshops to help members develop their skills and grow their businesses.', 4.5, 1000, 1, 1, 1, 1, 0, 1, 1, 0, 'Watthana,Bangkok', 'https://m1r.ai/9/bez4k.jpeg'),
('The Work Loft', 'The Work Loft is a boutique co-working space located in the heart of Bangkok\'s business district. With a mix of private offices and shared workspaces, it caters to a variety of professionals and businesses. The Work Loft also features a stylish and modern design, with plenty of natural light and greenery to create a refreshing and productive work environment.', 4.8, 50, 1, 1, 1, 1, 1, 1, 0, 0, 'Bang Rak,Bangkok', 'https://m1r.ai/9/7544j.jpg'),
('Punspace', 'Punspace is a co-working space with locations in Chiang Mai, Thailand. With a focus on community and collaboration, it offers a range of services and amenities to support its members. Punspace also hosts regular events and workshops, including skill-sharing sessions and networking events, to help its members connect and grow their businesses.', 4.3, 150, 1, 1, 1, 1, 0, 0, 1, 1, 'Mueang Chiang Mai,Chiang Mai', 'https://m1r.ai/9/1sb16.jpg'),
("WeWork T-One Building", "WeWork T-One Building is a premier coworking space in the heart of Bangkok's business district. With its sleek and modern design, it's the perfect place for entrepreneurs, startups, and established businesses to work and collaborate. The space offers private offices, hot desks, and conference rooms, as well as high-speed Wi-Fi, printing and scanning services, and complimentary refreshments.", 5, 100, 1, 1, 1, 1, 0, 1, 0,0, "Sathon,Bangkok", "https://m1r.ai/9/kw4qf.jpg"),
("Regus", "Regus Pattaya is a modern and professional coworking space located in the heart of Pattaya. With its stunning sea views and stylish interior, it's the perfect place for entrepreneurs, small businesses, and remote teams to work and collaborate. The space offers private offices, hot desks, and virtual office services, as well as high-speed Wi-Fi, 24/7 access, and professional administrative support.", 3, 40, 1, 1, 1, 1, 0, 1, 0,0, "Si Racha,ChonBuri", "https://m1r.ai/9/7tnm6.jpg"),
('The Great Room', 'The Great Room is a premium co-working space in Bangkok that offers a range of amenities including private offices, meeting rooms, and a fully-stocked kitchen. With a luxurious and modern interior design, this space is perfect for individuals and teams looking for a professional and inspiring work environment.', 4.7, 80, 1, 1, 1, 1, 1, 1, 1, 0, 'Pathum Wan,Bangkok', 'https://m1r.ai/9/vaetg.jpg'),
('CAMP', 'CAMP is a co-working space in Chiang Mai that offers a unique and creative work environment. With a focus on design and innovation, this space is perfect for individuals and teams looking for a stimulating and inspiring work environment. Amenities include high-speed internet, meeting rooms, and a fully-stocked kitchen.', 4.4, 50, 1, 1, 1, 1, 0, 1, 1, 0, 'Mueng Chiang Mai,Chiang Mai', 'https://m1r.ai/9/sfyab.jpg'),
('Too Fast To Sleep', 'Too Fast To Sleep is a unique co-working space in Bangkok that operates 24/7, providing a haven for night owls and early birds alike. The space offers a variety of seating options, from hot desks toprivate offices, and is equipped with modern amenities to cater to the needs of its diverse community.', 4, 120, 0, 1, 1, 1, 1, 1, 1, 0, 'Pathum Wan,Bangkok', 'https://m1r.ai/9/lr0vi.jpg'),
('The Brick Space', 'The Brick Space is a cozy and inviting co-working space in Chiang Mai, offering a mix of hot desks, private offices, and meeting rooms. The space is designed to foster a sense of community and collaboration, with regular events and workshops for members.', 4, 60, 0, 1, 1, 0, 0, 1, 1, 0, 'Mueang Chiang Mai,Chiang Mai', 'https://m1r.ai/9/vm2jj.jpg'),
('Draft Board', 'Draft Board is a modern and innovative co-working space in Bangkok, offering a mix of private offices, hot desks, and dedicated workstations. With its sleek design and state-of-the-art amenities, Draft Board attracts a diverse community of entrepreneurs, freelancers, and creatives.', 5, 120, 1, 1, 1, 1, 1, 1, 1, 0, 'Pathum Wan,Bangkok', 'https://m1r.ai/9/v8aja.jpg'),
('WYH.Boutique and Design Hostel', 'WYH.Boutique and Design Hostel is a stylish co-working space and hostel located in the heart of Bangkok, offering a mix of hot desks, private offices, and meeting rooms. The space attracts a diverse crowd of digital nomads, entrepreneurs, and freelancers.', 4, 50, 0, 1, 1, 1, 1, 0, 1, 0, 'Khlong San,Bangkok', 'https://m1r.ai/9/zmqja.jpg'),
('SPACE 49', 'SPACE 49 is a collaborative co-working space in Bangkok, offering a mix of hot desks, dedicated desks, and meeting rooms. The space features a friendly and supportive community, with regular workshops and events to help members grow and thrive.', 4, 70, 0, 1, 1, 0, 0, 1, 1, 0, 'Watthana,Bangkok', 'https://m1r.ai/9/x62r4.jpg'),
('KohSpace', 'KohSpace is a popular co-working space on the island of Koh Phangan, offering a mix of hot desks, dedicated desks, and meeting rooms. The space is known for its stunning location, relaxed atmosphere, and vibrant community of digital nomads and entrepreneurs.', 4, 40, 0, 1, 1, 1, 1, 0, 1, 0, 'Ko Phangan,Surat Thani', 'https://m1r.ai/9/t3xiq.jpg'),
('MANA Co-working Space', 'MANA Co-working Space is a modern and well-equipped co-working space in Phuket, offering a range of flexible workspaces, meeting rooms, and event spaces. With its stunning views and vibrant community, MANA is an ideal place for digital nomads and entrepreneurs.', 5, 90, 1, 1, 1, 1, 1, 1, 1, 0, 'Phuket Town, Phuket', 'https://m1r.ai/9/pb0ff.jpg'),
('PAH Creative Space', 'PAH Creative Space is a unique co-working space in Bangkok, offering a mix of private offices, hot desks, and dedicated workstations. The space has a focus on fostering creativity and innovation, with regular workshops and events for members.', 5, 80, 0, 1, 1, 1, 1, 1, 1, 0, 'Watthana,Bangkok', 'https://m1r.ai/9/3uavw.jpg');

UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31005.94896219223!2d100.51138887208118!3d13.733965882965332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f32a54c3ec3%3A0x426041fe57e47a1b!2sBIGWork!5e0!3m2!1sen!2sth!4v1682425619830!5m2!1sen!2sth' WHERE `placeId` = 1;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7466768579475!2d100.52561077539136!3d13.733780997709834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299baa7596e09%3A0x87b1b4d86f30f73f!2sC%20asean%20Samyan%20CO-OP!5e0!3m2!1sen!2sth!4v1682425667210!5m2!1sen!2sth' WHERE `placeId` = 2;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.571234235213!2d100.587306!3d13.724939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fb4b6d80905%3A0xd53ee15b49bb63b3!2sPAH%20Creative%20Space!5e0!3m2!1sen!2sth!4v1682425400270!5m2!1sen!2sth' WHERE `placeId` = 20;
UPDATE `Kohub`.`coworking` SET `map` = 'https://goo.gl/maps/UxkNXEKzh8DCd7VF9' WHERE `placeId` = 19;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.780087424309!2d100.01900227535045!3d9.699801578127639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054fc4f742d05f9%3A0xee7504d55a51be04!2sKoh%20Space!5e0!3m2!1sen!2sth!4v1682425339561!5m2!1sen!2sth' WHERE `placeId` = 18;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.812222567436!2d100.524226!3d13.721292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298cdd6e8270d%3A0x7e9aa39655924697!2sLaunchpad%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1682424854816!5m2!1sen!2sth' WHERE `placeId` = 3;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15499.368865752445!2d100.5105676!3d13.7883835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b866a4545cd%3A0x645254b2186ab5d2!2sRID%20Workspace!5e0!3m2!1sen!2sth!4v1682424885163!5m2!1sen!2st' WHERE `placeId` = 4;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15499.368865752445!2d100.5105676!3d13.7883835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e55a95f6f93%3A0xf9a8634f35bf33a6!2sthe%20Hive%20Thonglor!5e0!3m2!1sen!2sth!4v1682424910973!5m2!1sen!2sth' WHERE `placeId` = 5;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248012.41643460596!2d100.28480169706239!3d13.76717106631198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29407ff9da7c5%3A0xef3220f82b27d6d1!2s854%20Borommaratchachonnani%20Rd%2C%20Khwaeng%20Sala%20Thammasop%2C%20Khet%20Thawi%20Watthana%2C%20Krung%20Thep%20Maha%20Nakhon%2010170!5e0!3m2!1sen!2sth!4v1682424972793!5m2!1sen!2sth\"' WHERE `placeId` = 6;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.359922956495!2d100.5339494!3d13.7281361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2c0d3742f1%3A0xb414a27699651601!2sThe%20Work%20Loft!5e0!3m2!1sen!2sth!4v1682424995457!5m2!1sen!2sth' WHERE `placeId` = 7;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.213352916971!2d98.97722079357908!3d18.7933987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a97680a46ef%3A0x613bbb5c4777a705!2sPunspace%20Wiang%20Kaew!5e0!3m2!1sen!2sth!4v1682425026984!5m2!1sen!2sth' WHERE `placeId` = 8;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.934532236548!2d100.57812457539116!3d13.722413397972621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f7bcdf9c175%3A0xc58292312e6c4c03!2sWeWork%20T-One%20Building!5e0!3m2!1sen!2sth!4v1682425061251!5m2!1sen!2sth' WHERE `placeId` = 9;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3143053666545!2d100.91611838187286!3d13.079255979643547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b909c5109b7b%3A0xb3e61b5e6d6fefd3!2sRegus%20-%20Chonburi%2C%20Harbor%20Mall!5e0!3m2!1sen!2sth!4v1682425080537!5m2!1sen!2sth' WHERE `placeId` = 10;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.544593113577!2d100.53828827539142!3d13.745999297427224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fb5503a0223%3A0xb52420d50da37c2d!2sThe%20Great%20Room%20Gaysorn%20Tower%20-%20Coworking%20Space%20%26%20Hot%20Desking%20Bangkok!5e0!3m2!1sen!2sth!4v1682425106725!5m2!1sen!2sth' WHERE `placeId` = 11;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15107.63150794021!2d98.9668876!3d18.8022584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a61b51a1655%3A0xf48494b56c889d03!2sCAMP%20Creative%20and%20meeting%20place!5e0!3m2!1sen!2sth!4v1682425173438!5m2!1sen!2sth' WHERE `placeId` = 12;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5621964205598!2d100.52904357539144!3d13.744935397451895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f5d18d1da0b%3A0x784f7facb6ab5e4b!2sToo%20Fast%20To%20Sleep%20-%20Siam!5e0!3m2!1sen!2sth!4v1682425193257!5m2!1sen!2sth' WHERE `placeId` = 13;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120867.67028386553!2d98.82060209726562!3d18.7930412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a86192cbbef%3A0xd0d7f16f44d3bf42!2sThe%20Brick%20Startup%20Space!5e0!3m2!1sen!2sth!4v1682425216997!5m2!1sen!2sth' WHERE `placeId` = 14;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5632586320717!2d100.52721237539141!3d13.744871197453312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f71d3c20021%3A0x6e8cfed4426646a2!2sDraftBoard%20MBK%20center!5e0!3m2!1sen!2sth!4v1682425239038!5m2!1sen!2sth' WHERE `placeId` = 15;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.915233086051!2d100.49072598193885!3d13.723581663583499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298f01c19a395%3A0x391fc6c5bd8732fe!2sWYH(WongwainyaiHostel)!5e0!3m2!1sen!2sth!4v1682425259674!5m2!1sen!2sth' WHERE `placeId` = 16;
UPDATE `Kohub`.`coworking` SET `map` = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.453624721486!2d100.575479!3d13.7267185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f8f543d17c9%3A0x574e370604f70961!2sSPACE%2049!5e0!3m2!1sen!2sth!4v1682425322022!5m2!1sen!2sth' WHERE `placeId` = 17;