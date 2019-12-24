-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Des 2019 pada 05.00
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hiring_channel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `location` varchar(100) NOT NULL DEFAULT '',
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id`, `name`, `email`, `logo`, `location`, `description`) VALUES
('26c57ae4-2a9b-4b42-8e70-7047ebe587e8', 'ark', 'arkademy@gmail.com', 'logo-1576071503697.png', 'tebet', 'dfdsf'),
('8de4bfa3-b6e4-4630-832c-8915ab2a8277', 'ark', '', 'logo-1575941669072.png', 'tebet', 'dfdsf');

-- --------------------------------------------------------

--
-- Struktur dari tabel `engineers`
--

CREATE TABLE `engineers` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` text,
  `skill` text,
  `location` varchar(100) DEFAULT '',
  `date_of_birth` date DEFAULT NULL,
  `expected_salary` double DEFAULT '0',
  `email` varchar(100) DEFAULT '',
  `phone` varchar(15) DEFAULT '',
  `showcase` text,
  `date_created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `engineers`
--

INSERT INTO `engineers` (`id`, `name`, `photo`, `description`, `skill`, `location`, `date_of_birth`, `expected_salary`, `email`, `phone`, `showcase`, `date_created`, `date_updated`) VALUES
('0483e985-87c4-4eda-b968-c931892e567d', 'Bill Gates', '', 'Bill Gates description', 'javascript', 'NTT', '1998-01-01', 5000000, 'bill@gmail.com', '081211', '', '2019-12-09 10:51:00', '2019-12-09 10:51:00'),
('25508d32-5f94-4305-b16b-a28921c3d4ed', 'Mark Zuckerberg', '', 'Mark description', 'PHP', 'Aceh', '1998-01-01', 5500000, 'mark@gmail.com', '081222', '', '2019-12-08 07:38:08', '2019-12-08 07:38:08'),
('284e01cd-209e-4d19-af9a-5b5d9489507c', 'Steve Jobs', '', 'Steve description', 'Python', 'Jambi', '1998-01-01', 4500000, 'steve@gmail.com', '081233', '', '2019-12-09 13:13:08', '2019-12-09 13:13:08'),
('4ea8c487-6009-49cd-a89a-9b9549fa1e92', 'Ryan Dahl', '', 'Ryan Description', 'Ruby', 'Medan', '1998-01-01', 8000000, 'ryan@gmail.com', '081244', 'showcase.com/ryan', '2019-12-10 14:53:25', '2019-12-10 14:53:25'),
('5960abd6-b47e-47d6-9aff-3a5afb5aa98d', 'James Gosling', '', 'James Description', 'Java', 'Padang', '1998-01-01', 6000000, 'james@gmail.com', '081255', '', '2019-12-09 13:13:10', '2019-12-09 13:13:10'),
('65eca8f1-4d05-498b-942e-6ccfe1f104bf', 'Elon Musk', '', 'Elon description', 'C#', 'Jambi', '1997-01-01', 6500000, 'elon@gmail.com', '081266', 'showcase.com/elon', '2019-12-08 07:37:33', '2019-12-13 04:13:58'),
('8c006e5d-e9fd-4c27-aa80-8fb33fc9ec66', 'Larry Page', '', 'Larry description', 'Golang', 'Batam', '1998-01-01', 12000000, 'larry@gmail.com', '081277', '', '2019-12-08 07:37:12', '2019-12-08 07:37:12'),
('c059d1ec-d426-4c8e-9475-d31951ffb201', 'Jack Dorsey', '', 'Jack description', 'Perl', 'Bekasi', '1998-01-01', 7500000, 'jack@gmail.com', '081288', '', '2019-12-08 07:38:38', '2019-12-08 07:38:38'),
('cf6f9b01-9986-438a-93e5-4d67319dbb06', 'Ada Lovelace', 'https://localhost:8000src\\img\\engineer\\photo-1576478061592.png', 'Ada description', 'javascript, php, python', 'Sulawesi', '1998-01-01', 10000000, 'Ada@gmail.com', '0800', 'www.showcase.com/ada', '2019-12-16 06:34:21', '2019-12-16 06:34:21'),
('d0d4082d-49e5-4c70-9cbd-63c49d61d173', 'Jeff Bezos', '', 'Jeff description', 'Kotlin', 'Bandung', '1998-01-01', 9000000, 'jeff@gmail.com', '081299', 'showcase.com/jeff', '2019-12-12 06:32:06', '2019-12-12 06:32:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `messages`
--

CREATE TABLE `messages` (
  `id` varchar(50) NOT NULL,
  `sender_email` varchar(100) NOT NULL,
  `dest_email` varchar(100) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `messages`
--

INSERT INTO `messages` (`id`, `sender_email`, `dest_email`, `message`) VALUES
('d3c6e146-40ce-4c74-b32e-00b0d1fc27f3', 'email@gmail.com', 'arkademy@gmail.com', 'Halo arkademian');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`) VALUES
('61b864b7-8a39-45fb-95fb-ee05f2f66798', 'deny@gmail', '$2a$08$DiyBl6U2ZVoZLvygz55YjuPpg9P7ZUWKlUkdVEo.wDC66P3jPRXsy', 'engineer'),
('dd60787e-f46d-4160-baf8-937e7fec13af', 'kurniawan@gmail.com', '$2a$08$BCOUa/G/HikNY3CXPJvLnu1kj8W9r.9XhgG9SZ5c.90KryKmvzRMC', 'company'),
('f7f64198-2db5-4988-98fb-e438619ec2c0', 'email@gmail.com', '$2a$08$7zYuDTf8AyS6YZbaXLem6eVCfF6/uopB1bxCWZuwEc.CBcCM4mpiW', 'engineer');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `engineers`
--
ALTER TABLE `engineers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
