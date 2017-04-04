-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-03-19 00:36:46
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
(54, 'sdfs', 'sdaf s', 'dfgd', '2017-03-12 00:00:00', 'sfd'),
(56, 'adw', 'wd ', 'asd', '2017-03-11 00:00:00', 'sdv'),
(57, 'adw', 'wd ', 'asd', '2017-03-11 00:00:00', 'sdv'),
(58, 'fdg', 'rty', 'gfhd', '2017-03-19 00:00:00', 'fgh'),
(59, '搞笑', 'gjh ', 'gfh', '2017-03-12 00:00:00', 'fghfh'),
(60, 'hgfjf', 'hgj', 'ghj', '2017-03-26 00:00:00', 'fhf'),
(61, 'hgfjf', 'hgj', 'ghj', '2017-03-26 00:00:00', 'fhf'),
(62, 'hgfjf', 'hgj', 'ghj', '2017-03-26 00:00:00', 'fhf'),
(65, '精选', 'fgh', 'ngn', '2017-03-12 00:00:00', 'nfg'),
(66, '百家', 'fgh', 'ngn', '2017-03-12 00:00:00', 'nfg'),
(67, '女人', '是地方郭德纲', '色的冯绍峰', '2017-03-18 00:00:00', '算法');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
