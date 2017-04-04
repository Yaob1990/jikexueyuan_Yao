-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-03-27 14:23:03
-- 服务器版本： 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(65, '精选', 'wd ', 'asd', '2017-03-28 00:00:00', 'sdv'),
(67, '精选', '123', '123', '2017-03-18 00:00:00', '123'),
(68, '精选', '123', '123', '2017-03-18 00:00:00', '123'),
(69, '百家', '123', '123', '2017-03-19 00:00:00', '1234'),
(70, '百家', '123', '123', '2017-03-19 00:00:00', '1234'),
(71, '百家', '123', '123', '2017-03-19 00:00:00', '1234'),
(72, '本地', '123', '123', '2017-03-19 00:00:00', '1234'),
(73, '本地', '123', '123', '2017-03-19 00:00:00', '1234'),
(74, '本地', '123', '123', '2017-03-19 00:00:00', '1234'),
(75, '本地', '123', '123', '2017-03-19 00:00:00', '1234'),
(76, '娱乐', '123', '123', '2017-03-19 00:00:00', '1234'),
(77, '娱乐', '123', '123', '2017-03-19 00:00:00', '1234'),
(78, '娱乐', '123', '123', '2017-03-25 00:00:00', '1234'),
(79, '精选', '567', '', '2017-03-04 00:00:00', '44'),
(80, '精选', '567', '', '2017-03-04 00:00:00', '44'),
(81, '精选', '567', '', '2017-03-04 00:00:00', '44'),
(82, '精选', '32e424er56', '324234', '2017-03-05 00:00:00', '234'),
(83, '本地', '32e424er56', '324234', '2017-03-18 00:00:00', '234'),
(84, '精选', '123', '123', '2017-03-11 00:00:00', '22'),
(85, '图片', '223', '223423', '2017-03-29 00:00:00', '2344');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
