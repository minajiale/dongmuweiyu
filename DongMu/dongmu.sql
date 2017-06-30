/*
Navicat MySQL Data Transfer

Source Server         : dongmuweiyu
Source Server Version : 50538
Source Host           : localhost:3306
Source Database       : dongmu

Target Server Type    : MYSQL
Target Server Version : 50538
File Encoding         : 65001

Date: 2017-06-30 10:14:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `class`
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(11) NOT NULL DEFAULT '0',
  `class` varchar(255) DEFAULT NULL COMMENT '分类名字 例如1-2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('0', 'door');
INSERT INTO `class` VALUES ('1', 'toilet');

-- ----------------------------
-- Table structure for `customer`
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '客户名字',
  `phone` varchar(11) DEFAULT NULL COMMENT '客户电话',
  `address` varchar(255) DEFAULT NULL COMMENT '客户住址',
  `order` varchar(255) DEFAULT NULL COMMENT '关联订单ID。',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('1', '王麻子', '15907040062', '马坪镇34号', '3');

-- ----------------------------
-- Table structure for `payway`
-- ----------------------------
DROP TABLE IF EXISTS `payway`;
CREATE TABLE `payway` (
  `id` int(11) NOT NULL DEFAULT '0',
  `payway` int(11) DEFAULT NULL,
  `paywayname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of payway
-- ----------------------------
INSERT INTO `payway` VALUES ('1', '1', '现金');
INSERT INTO `payway` VALUES ('0', '2', '支付宝');
INSERT INTO `payway` VALUES ('2', '3', '微信');

-- ----------------------------
-- Table structure for `people`
-- ----------------------------
DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '人员ID',
  `name` varchar(30) DEFAULT NULL COMMENT '店内人员真实姓名',
  `power` int(11) DEFAULT '2' COMMENT '人员权限：1为管理员，2为普通店员',
  `password` varchar(50) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of people
-- ----------------------------
INSERT INTO `people` VALUES ('1', '刘联友', '1', '123456', '15929159416');

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `class` int(11) DEFAULT NULL COMMENT '商品分类',
  `buyprice` double DEFAULT NULL COMMENT 'jinjia',
  `sellprice` double DEFAULT NULL COMMENT '卖价',
  `location` varchar(255) DEFAULT NULL COMMENT 'fangzhi位置',
  `picture` varchar(255) DEFAULT NULL COMMENT '产品图片',
  `number` double DEFAULT NULL COMMENT '库存',
  `minnumber` double DEFAULT NULL COMMENT '库存的最小数量，当小于这个数时发出警告',
  PRIMARY KEY (`id`),
  KEY `商品类别` (`class`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('2', '东木卫浴', '2', '34', '600', null, null, '67', '5');
INSERT INTO `products` VALUES ('1', '黄铜大门', '1', '7800', '8000', null, null, '2', '4');

-- ----------------------------
-- Table structure for `productsorder`
-- ----------------------------
DROP TABLE IF EXISTS `productsorder`;
CREATE TABLE `productsorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT NULL COMMENT '订单生成时间',
  `customer` bigint(20) DEFAULT NULL COMMENT '关联客户信息表ID',
  `totalamount` double DEFAULT NULL COMMENT '该笔订单利润',
  `payway` int(11) DEFAULT NULL COMMENT '付款方式；1为现金，2为微信，3为支付宝，4为银行转账',
  `debt` double DEFAULT NULL COMMENT '欠款金额',
  `progress` int(11) DEFAULT NULL COMMENT '订单进度;1为预付定金，2为欠款未完成，3为完结',
  `products` varchar(255) DEFAULT NULL COMMENT '购买商品列表',
  `owner` int(11) DEFAULT NULL COMMENT '产生该订单的店员，与people表相关联',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=gbk ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of productsorder
-- ----------------------------
INSERT INTO `productsorder` VALUES ('1', '2017-06-29 15:55:00', '1', '87654', '1', '0', '1', '76543', '2');

-- ----------------------------
-- Table structure for `progess`
-- ----------------------------
DROP TABLE IF EXISTS `progess`;
CREATE TABLE `progess` (
  `id` int(11) NOT NULL DEFAULT '0',
  `progress` int(11) DEFAULT NULL,
  `progessname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of progess
-- ----------------------------
INSERT INTO `progess` VALUES ('1', '1', '完结');
INSERT INTO `progess` VALUES ('0', '2', '预付定金');
INSERT INTO `progess` VALUES ('3', '3', '欠款');
