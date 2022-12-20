-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Gegenereerd op: 09 nov 2022 om 20:10
-- Serverversie: 10.5.16-MariaDB
-- PHP-versie: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id19837666_boten`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `boten`
--

DROP TABLE IF EXISTS `boten`;
CREATE TABLE `boten` (
  `ID` int(11) NOT NULL,
  `naam` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `img_ID` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `datasheet` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `color_1` varchar(6) COLLATE utf8_unicode_ci DEFAULT NULL,
  `color_2` varchar(6) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beschikbaar` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `boten`
--

INSERT INTO `boten` (`ID`, `naam`, `type`, `img_ID`, `description`, `datasheet`, `color_1`, `color_2`, `beschikbaar`) VALUES
(1, 'stormvogel', 'BM', '1-YfVH0eq2lwVyU3nWc9dOh_N9e1F2LXJ', 'Grootzeil Lion Sails (Gaffelzeil)\r\nFokzeil Lion Sails', 'https://drive.google.com/file/d/1x6gLJQFxvr1ihPqvZBbrstd3xUSR1CNK/view?usp=sharing', 'ffffff', '2104d2', 1),
(2, 'Dulle Griet', 'drasombe lugger', '15kZKTuHDf9APGQn9wId6P9gphTB2VcrH', 'Grootzeil Westway & Co (Gaffelzeil)\r\nFokzeil Westway & Co (Rolfok)\r\nBezaan Westway & Co', 'https://drive.google.com/file/d/1veUXzPa7-m9ZlE-5S065tk5JNT_uukME/view?usp=sharing', 'ff0000', '000000', 0),
(3, 'Helga', 'flying arrow', '1-h5_cOtgy91UWSRVnS2tQ3gehgu6Z9Gn', 'Grootzeil landtmeters Sailes\r\nFokzeil landmeters Sailes', 'https://drive.google.com/file/d/1EgydMk7fVtr5LPktf92xm_BA_m2rr9QR/view?usp=sharing', NULL, NULL, 1),
(4, 'Kniertje', 'volksboot 480', '1-WYJGgh7pEfu0ELxk_qTvPuXOHoZLcKG', 'Grootzeil\r\nFokzeil\r\nidem Alcedo', 'https://drive.google.com/file/d/1K8Qq1IwBYL4LDdGsBjPpSXcHFBljAb_u/view?usp=sharing', '2104d2', '2104d2', 1),
(5, 'Alcedo', 'volksboot 480', '1-bxh9dHA-uE2IT9p9N7yl28eDEVZ-9og', 'Grootzeil\r\nFokzeil\r\nidem Kniertje', 'https://drive.google.com/file/d/1cHrgl3vVM2Av5apsJLOtg3dw4f3mS2mG/view?usp=sharing', 'ffffff', 'ffffff', 1),
(6, 'Jeanneau 1 & 2', 'New matic Rigiflex 360', '1-38Rn1tcG4JO3OqYCa6tUm0vhoUISR5Q', 'oranje roeiboten', 'https://drive.google.com/file/d/10-Zfy2-XSIpoNgtFch84unVZwgIcLbTD/view?usp=sharing', NULL, NULL, 1),
(7, 'Whaly 1 & 2', 'Whaly 435', '1-RuVwV3V-DR7GiHtbLMesImIp7yMeBfA', 'rode roeiboten', 'https://drive.google.com/file/d/1rwnf76i1quRVyNWlQdBqotdZy5XaP1Yj/view?usp=sharing', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `schade`
--

DROP TABLE IF EXISTS `schade`;
CREATE TABLE `schade` (
  `ID` int(11) NOT NULL,
  `bootid` int(11) NOT NULL,
  `prioriteit` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `boten`
--
ALTER TABLE `boten`
  ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `schade`
--
ALTER TABLE `schade`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `bootid` (`bootid`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `boten`
--
ALTER TABLE `boten`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT voor een tabel `schade`
--
ALTER TABLE `schade`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `schade`
--
ALTER TABLE `schade`
  ADD CONSTRAINT `bootid` FOREIGN KEY (`bootid`) REFERENCES `boten` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
