/*
Navicat MySQL Data Transfer

Source Server         : dongmuweiyu
Source Server Version : 50538
Source Host           : localhost:3306
Source Database       : dongmu

Target Server Type    : MYSQL
Target Server Version : 50538
File Encoding         : 65001

Date: 2017-07-15 02:08:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `classiffication`
-- ----------------------------
DROP TABLE IF EXISTS `classiffication`;
CREATE TABLE `classiffication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classTop` varchar(255) DEFAULT NULL COMMENT '一级分类名字 例如1-2',
  `classTwo` varchar(255) DEFAULT NULL COMMENT '二级分类',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=gbk ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of classiffication
-- ----------------------------

-- ----------------------------
-- Table structure for `classification`
-- ----------------------------
DROP TABLE IF EXISTS `classification`;
CREATE TABLE `classification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classTop` varchar(255) DEFAULT NULL COMMENT '分类名字 例如1-2',
  `classTwo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of classification
-- ----------------------------
INSERT INTO `classification` VALUES ('1', '其他', '地漏');
INSERT INTO `classification` VALUES ('2', '其他', '铝塑');
INSERT INTO `classification` VALUES ('3', '装修材料', null);
INSERT INTO `classification` VALUES ('4', '净水器系列', null);
INSERT INTO `classification` VALUES ('5', '花洒', '手喷');
INSERT INTO `classification` VALUES ('6', '花洒', '东牧');
INSERT INTO `classification` VALUES ('7', '花洒', '软管');
INSERT INTO `classification` VALUES ('8', '座便器', '东牧');
INSERT INTO `classification` VALUES ('9', '座便器', '其他');
INSERT INTO `classification` VALUES ('10', '瓷砖', '卫生瓷');
INSERT INTO `classification` VALUES ('11', '瓷砖', '防滑砖');
INSERT INTO `classification` VALUES ('12', '门系列', '门');
INSERT INTO `classification` VALUES ('13', '门系列', '锁');
INSERT INTO `classification` VALUES ('14', '太阳能', 'PPR');
INSERT INTO `classification` VALUES ('15', '太阳能', '太阳能');
INSERT INTO `classification` VALUES ('16', '浴柜', 'PVC');
INSERT INTO `classification` VALUES ('17', '浴柜', '东牧');
INSERT INTO `classification` VALUES ('18', '浴柜', '不锈钢');
INSERT INTO `classification` VALUES ('19', '挂件', '厨房双杆');
INSERT INTO `classification` VALUES ('20', '挂件', '双杆');
INSERT INTO `classification` VALUES ('21', '挂件', '单杆');
INSERT INTO `classification` VALUES ('22', '龙头系列', '厨房混水阀');
INSERT INTO `classification` VALUES ('23', '龙头系列', '面盆混水阀');
INSERT INTO `classification` VALUES ('24', '龙头系列', '单水');

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
  `class` varchar(255) DEFAULT NULL COMMENT '商品分类',
  `buyprice` double DEFAULT NULL COMMENT 'jinjia',
  `sellprice` double DEFAULT NULL COMMENT '卖价',
  `location` varchar(255) DEFAULT NULL COMMENT 'fangzhi位置',
  `picture` varchar(255) DEFAULT NULL COMMENT '产品图片',
  `number` double DEFAULT NULL COMMENT '库存',
  `minnumber` double DEFAULT NULL COMMENT '库存的最小数量，当小于这个数时发出警告',
  `code` varchar(255) DEFAULT NULL,
  `specifications` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `商品类别` (`class`)
) ENGINE=MyISAM AUTO_INCREMENT=411 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('76', '东牧花洒', '花洒系列', '0', '0', null, '', '2', '1', 'DM-130', '-');
INSERT INTO `products` VALUES ('87', '东牧洗衣机地漏', '地漏系列', '0', '0', null, '', '7', '1', 'DM-19', '-');
INSERT INTO `products` VALUES ('44', '东牧坐便器', '马桶系列', '0', '0', null, '', '1', '1', 'DM-831', '-');
INSERT INTO `products` VALUES ('41', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', ' DM-107', '1套');
INSERT INTO `products` VALUES ('45', '东牧坐便器', '马桶系列', '0', '0', null, '', '1', '1', 'DM-866', '-');
INSERT INTO `products` VALUES ('46', '东牧坐便器', '马桶系列', '0', '0', null, '', '1', '1', '钻石', '-');
INSERT INTO `products` VALUES ('47', '东牧坐便器', '座便器系列', '0', '0', null, '', '1', '1', 'DM-895', '-');
INSERT INTO `products` VALUES ('48', '东牧坐便器', '座便器系列', '0', '0', null, '', '1', '1', 'DM-856', '-');
INSERT INTO `products` VALUES ('49', '东牧坐便器', '座便器系列', '0', '0', null, '', '1', '1', 'DM-885', '-');
INSERT INTO `products` VALUES ('50', '东牧坐便器', '座便器系列', '0', '0', null, '', '2', '1', 'DM-899', '-');
INSERT INTO `products` VALUES ('51', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-111-13', '-');
INSERT INTO `products` VALUES ('52', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-116-18', '-');
INSERT INTO `products` VALUES ('53', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-116-18B', '-');
INSERT INTO `products` VALUES ('54', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '2', '1', 'DM-208-2', '-');
INSERT INTO `products` VALUES ('55', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '4', '1', 'DM-112-28', '-');
INSERT INTO `products` VALUES ('56', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-432-27', '-');
INSERT INTO `products` VALUES ('57', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-439-31', '-');
INSERT INTO `products` VALUES ('58', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-125-40', '-');
INSERT INTO `products` VALUES ('59', '东牧菜盆龙头', '龙头系列', '0', '0', null, '', '4', '1', 'DM-114-30', '-');
INSERT INTO `products` VALUES ('60', '东牧脸盆/双孔龙头', '龙头系列', '0', '0', null, '', '3', '1', 'DM-209-05', '-');
INSERT INTO `products` VALUES ('61', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-421-60', '-');
INSERT INTO `products` VALUES ('62', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '2', '1', 'DM-411-13', '-');
INSERT INTO `products` VALUES ('63', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-416-27', '-');
INSERT INTO `products` VALUES ('64', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-415-31', '-');
INSERT INTO `products` VALUES ('65', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-413-29', '-');
INSERT INTO `products` VALUES ('66', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '1', '1', 'DM-483-24', '-');
INSERT INTO `products` VALUES ('67', '东牧脸盆龙头', '龙头系列', '0', '0', null, '', '2', '1', 'DM-418-10', '-');
INSERT INTO `products` VALUES ('68', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-122', '-');
INSERT INTO `products` VALUES ('69', '东牧花洒', '花洒系列', '0', '0', null, '', '2', '1', 'DM-022', '-');
INSERT INTO `products` VALUES ('70', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-120', '-');
INSERT INTO `products` VALUES ('71', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-123', '-');
INSERT INTO `products` VALUES ('72', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-13', '-');
INSERT INTO `products` VALUES ('73', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-151', '-');
INSERT INTO `products` VALUES ('74', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-12', '-');
INSERT INTO `products` VALUES ('75', '东牧花洒', '花洒系列', '0', '0', null, '', '2', '1', 'DM-107', '-');
INSERT INTO `products` VALUES ('77', '东牧花洒', '花洒系列', '0', '0', null, '', '1', '1', 'DM-016', '-');
INSERT INTO `products` VALUES ('78', '豪华淋浴花洒', '花洒系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('79', '东牧蹲便器', '座便器系列', '0', '0', null, '', '7', '1', 'DM-H202-1', '-');
INSERT INTO `products` VALUES ('80', '正大蹲便器（直弯）', '座便器系列', '0', '0', null, '', '2', '1', 'ZD', '-');
INSERT INTO `products` VALUES ('81', '东牧水箱', '座便器系列', '0', '0', null, '', '1', '1', '408A', '-');
INSERT INTO `products` VALUES ('82', '东牧水箱', '座便器系列', '0', '0', null, '', '5', '2', '306-B', '-');
INSERT INTO `products` VALUES ('83', '摩登节能水箱', '座便器系列', '0', '0', null, '', '4', '3', 'M16百合', '-');
INSERT INTO `products` VALUES ('84', '欧美卡', '花洒系列', '0', '0', null, '', '1', '1', '99907', '-');
INSERT INTO `products` VALUES ('85', '欧美卡', '花洒系列', '0', '0', null, '', '1', '1', '99908', '-');
INSERT INTO `products` VALUES ('86', '东牧花洒', '花洒系列', '0', '0', null, '', '2', '1', 'MD-80', '-');
INSERT INTO `products` VALUES ('88', '东牧地漏', '地漏系列', '0', '0', null, '', '43', '1', 'DM-20', '-');
INSERT INTO `products` VALUES ('89', '洗衣机龙头', '龙头系列', '0', '0', null, '', '28', '1', 'DM-824', '-');
INSERT INTO `products` VALUES ('90', '中长网咀', '龙头系列', '0', '0', null, '', '10', '1', 'DM-926', '-');
INSERT INTO `products` VALUES ('91', '东牧分水器', '花洒系列', '0', '0', null, '', '19', '1', '-', '-');
INSERT INTO `products` VALUES ('92', '东牧地漏', '地漏系列', '0', '0', null, '', '4', '1', 'DM-18', '-');
INSERT INTO `products` VALUES ('93', '东牧洗衣机地漏', '地漏系列', '0', '0', null, '', '2', '1', 'DM-17', '-');
INSERT INTO `products` VALUES ('94', '中长水咀', '龙头系列', '0', '0', null, '', '6', '1', 'DM-825', '-');
INSERT INTO `products` VALUES ('95', '短水咀', '龙头系列', '0', '0', null, '', '11', '1', 'DM-823', '-');
INSERT INTO `products` VALUES ('96', '三角阀', '配件', '0', '0', null, '', '30', '1', 'DM-907X', '-');
INSERT INTO `products` VALUES ('97', '安利来三角阀', '配件', '0', '0', null, '', '17', '1', '-', '-');
INSERT INTO `products` VALUES ('98', '永超三角阀', '配件', '0', '0', null, '', '7', '1', '-', '两只装');
INSERT INTO `products` VALUES ('99', '幸福地漏', '地漏系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('100', '弘扬合金水龙头', '龙头系列', '0', '0', null, '', '24', '1', '-', '-');
INSERT INTO `products` VALUES ('101', '弘扬合金洗衣机水龙头', '龙头系列', '0', '0', null, '', '12', '1', '-', '-');
INSERT INTO `products` VALUES ('102', '东牧淋浴阀', '龙头系列', '0', '0', null, '', '2', '1', '612-80', '-');
INSERT INTO `products` VALUES ('103', '东牧双杆', '挂件系列', '0', '0', null, '', '10', '1', 'DM-6212', '-');
INSERT INTO `products` VALUES ('104', '卡斯特双杆', '挂件系列', '0', '0', null, '', '4', '1', '8716', '-');
INSERT INTO `products` VALUES ('105', '欧美卡单杆', '挂件系列', '0', '0', null, '', '2', '1', '2701', '-');
INSERT INTO `products` VALUES ('106', '科维双杆', '挂件系列', '0', '0', null, '', '3', '1', '88519', '-');
INSERT INTO `products` VALUES ('107', '锌合金挂钩', '挂件系列', '0', '0', null, '', '5', '1', '-', '-');
INSERT INTO `products` VALUES ('108', '塑料手纸盒', '挂件系列', '0', '0', null, '', '14', '1', '', '-');
INSERT INTO `products` VALUES ('109', '永恒高弯双孔', '龙头系列', '0', '60', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('110', '永超低弯双孔', '龙头系列', '0', '80', null, '', '2', '1', 'YOCO', '-');
INSERT INTO `products` VALUES ('111', '耐发方形单孔混水阀', '龙头系列', '0', '80', null, '', '7', '1', '-', '-');
INSERT INTO `products` VALUES ('112', '同辉达单孔混水阀', '龙头系列', '0', '60', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('113', '忆琳单孔混水阀', '龙头系列', '0', '60', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('114', '益四方单孔混水阀', '龙头系列', '0', '120', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('115', '任发，菜盆龙头', '龙头系列', '0', '60', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('116', '中国风，菜盆龙头', '龙头系列', '0', '80', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('117', '帝王，菜盆龙头', '龙头系列', '0', '180', null, '', '2', '1', '8480', '-');
INSERT INTO `products` VALUES ('118', '宏源州，菜盆龙头', '龙头系列', '0', '120', null, '', '0', '1', '-', '-');
INSERT INTO `products` VALUES ('119', '明装PR，下进水', '淋浴阀系列', '0', '60', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('120', '桑意铝塑管，明装，左右进水', '淋浴阀系列', '0', '50', null, '', '6', '1', '-', '-');
INSERT INTO `products` VALUES ('121', '大四方淋浴阀，暗装', '淋浴阀系列', '0', '80', null, '', '2', '1', 'FY-A180', '-');
INSERT INTO `products` VALUES ('122', '忆琳，矮的，单水系列', '单水系列', '0', '15', null, '', '6', '1', '-', '-');
INSERT INTO `products` VALUES ('123', '忆琳高弯单水龙头', '单水系列', '0', '0', null, '', '5', '1', '-', '-');
INSERT INTO `products` VALUES ('124', '安利来', '单水系列', '0', '18', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('125', '小立式', '单水系列', '0', '12', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('126', '顶贲', '配件', '0', '25', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('127', '黑豹增压泵', '净水器系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('128', '东牧前置过滤器', '净水器系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('129', '厨房净水器', '净水器系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('130', '', '挂件系列', '0', '0', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('131', '科维马桶刷', '挂件系列', '0', '0', null, '', '3', '1', '88518-A', '-');
INSERT INTO `products` VALUES ('132', '东牧马桶刷', '挂件系列', '0', '0', null, '', '1', '1', 'DM-6210', '-');
INSERT INTO `products` VALUES ('133', '锌合金置物架', '配件系列', '0', '0', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('134', '电热水龙头', '挂件系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('135', '科维皂网', '挂件系列', '0', '0', null, '', '1', '1', '88507', '-');
INSERT INTO `products` VALUES ('136', '东牧浴巾架', '挂件系列', '0', '0', null, '', '3', '1', 'DM-5115-1', '-');
INSERT INTO `products` VALUES ('137', '东牧单杆', '挂件系列', '0', '0', null, '', '7', '1', 'DM-6211', '-');
INSERT INTO `products` VALUES ('138', '亿明森，金色', '挂件系列', '0', '0', null, '', '2', '1', '9313A', '-');
INSERT INTO `products` VALUES ('139', '亿明森，金色', '挂件系列', '0', '0', null, '', '2', '1', '9326', '-');
INSERT INTO `products` VALUES ('140', '东牧软管', '挂件系列', '0', '0', null, '', '3', '1', '双头', '30cm');
INSERT INTO `products` VALUES ('141', '东牧软管', '挂件系列', '0', '0', null, '', '5', '1', '双头', '50cm');
INSERT INTO `products` VALUES ('142', '东牧软管', '挂件系列', '0', '0', null, '', '15', '1', '双头', '60cm');
INSERT INTO `products` VALUES ('143', '东牧软管', '挂件系列', '0', '0', null, '', '21', '1', '双头', '80cm');
INSERT INTO `products` VALUES ('144', '东牧软管', '挂件系列', '0', '0', null, '', '7', '1', '单头', '80cm');
INSERT INTO `products` VALUES ('145', '精品厨卫软管', '挂件系列', '0', '0', null, '', '9', '1', '单头', '80cm');
INSERT INTO `products` VALUES ('146', '精品厨卫软管', '挂件系列', '0', '0', null, '', '22', '1', '双头', '80cm');
INSERT INTO `products` VALUES ('147', '吕浴巾架', '挂件系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('148', '东牧双杆', '挂件系列', '0', '0', null, '', '1', '1', '6812', '-');
INSERT INTO `products` VALUES ('149', '东牧单杆', '挂件系列', '0', '0', null, '', '1', '1', '6811', '-');
INSERT INTO `products` VALUES ('150', '东牧浴巾架', '挂件系列', '0', '0', null, '', '1', '1', '6912', '-');
INSERT INTO `products` VALUES ('151', '东牧平台杆', '挂件系列', '0', '0', null, '', '1', '1', '6873A', '-');
INSERT INTO `products` VALUES ('152', '东牧双层杆', '挂件系列', '0', '0', null, '', '1', '1', '5114-2', '-');
INSERT INTO `products` VALUES ('153', '东牧毛巾环', '挂件系列', '0', '0', null, '', '2', '1', '5805', '-');
INSERT INTO `products` VALUES ('154', '聚源手纸盒', '挂件系列', '0', '0', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('155', '东牧平台杆', '挂件系列', '0', '0', null, '', '1', '1', '6213A', '-');
INSERT INTO `products` VALUES ('156', '任发', '配件', '0', '0', null, '', '10', '1', '手喷软管', '1.5m');
INSERT INTO `products` VALUES ('157', '桦纯软管', '花洒系列', '0', '0', null, '', '8', '5', '双头', '-');
INSERT INTO `products` VALUES ('158', '桦纯软管', '花洒系列', '0', '0', null, '', '1', '1', '单头', '-');
INSERT INTO `products` VALUES ('159', '玻纹管', '配件', '0', '0', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('160', '圆形手喷 非东牧', '花洒系列', '0', '0', null, '', '5', '1', '-', '-');
INSERT INTO `products` VALUES ('161', '方形手喷', '花洒系列', '0', '0', null, '', '8', '1', '-', '-');
INSERT INTO `products` VALUES ('162', '卡斯特平台杆', '挂件系列', '0', '0', null, '', '16', '8', '6005', '-');
INSERT INTO `products` VALUES ('163', '不锈钢手纸盒', '配件', '0', '0', null, '', '6', '1', '-', '0');
INSERT INTO `products` VALUES ('164', 'PVC 浴室柜', '浴柜系列', '0', '0', null, '', '1', '1', '6019', '-');
INSERT INTO `products` VALUES ('165', 'PVC 浴室柜', '浴柜系列', '0', '0', null, '', '1', '1', '6022', '-');
INSERT INTO `products` VALUES ('166', 'PVC 浴室柜', '浴柜系列', '0', '0', null, '', '1', '1', '8001', '-');
INSERT INTO `products` VALUES ('167', '门吸', '配件', '0', '0', null, '', '19', '8', '-', '-');
INSERT INTO `products` VALUES ('168', '合页（古铜色，单位：付）', '配件', '0', '0', null, '', '53', '6', '-', '-');
INSERT INTO `products` VALUES ('169', '马桶坐盖', '配件', '0', '0', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('170', '地脚线/每箱38', '瓷砖系列', '0', '0', null, '', '48', '2', '-', '800*100');
INSERT INTO `products` VALUES ('171', '钛合金大门', '门系列', '0', '0', null, '', '1', '1', '2.8m*2.8m (内开)', '-');
INSERT INTO `products` VALUES ('172', '锌合金大门（内包内开）', '门系列', '0', '0', null, '', '1', '1', '-', '高3020*宽2760');
INSERT INTO `products` VALUES ('173', '80地脚线（纯黑，薄）/单位：片', '瓷砖系列', '0', '3.5', null, '', '960', '10', '803', '800*100');
INSERT INTO `products` VALUES ('174', '防盗门（外右）', '门系列', '0', '0', null, '', '1', '1', '-', '960*2050');
INSERT INTO `products` VALUES ('175', '蝴蝶玉石（粉色）', '瓷砖系列', '0', '0', null, '', '15', '1', '-', '-');
INSERT INTO `products` VALUES ('176', '仿木纹', '瓷砖系列', '0', '0', null, '', '92', '1', '-', '600*600');
INSERT INTO `products` VALUES ('177', '墙裙', '瓷砖系列', '0', '0', null, '', '26', '1', '-', '300*900');
INSERT INTO `products` VALUES ('178', '康格斯不锈钢水槽（单）', '龙头系列', '0', '0', null, '', '8', '1', '-', '-');
INSERT INTO `products` VALUES ('179', '康格斯不锈钢水槽（双）', '龙头系列', '0', '0', null, '', '12', '1', '-', '-');
INSERT INTO `products` VALUES ('180', '东牧水槽（双）', '龙头系列', '0', '0', null, '', '1', '1', 'DM-7741', '-');
INSERT INTO `products` VALUES ('181', '4号柱盆', '浴柜系列', '0', '0', null, '', '5', '1', '-', '-');
INSERT INTO `products` VALUES ('182', '拖把池（松良，大）', '浴柜系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('183', '面盆', '浴柜系列', '0', '0', null, '', '2', '1', '3280', '-');
INSERT INTO `products` VALUES ('184', '东牧面盆/立柱盆', '浴柜系列', '0', '0', null, '', '2', '1', '618', '-');
INSERT INTO `products` VALUES ('185', '东牧浴室柜（黑加白）', '浴柜系列', '0', '0', null, '', '1', '1', '2131', '-');
INSERT INTO `products` VALUES ('186', '钢化盆', '浴柜系列', '0', '0', null, '', '2', '1', '1015', '-');
INSERT INTO `products` VALUES ('187', '踏步（红色）', '瓷砖系列', '0', '0', null, '', '10', '1', '-', '60*60');
INSERT INTO `products` VALUES ('188', '踏步（黑色）', '瓷砖系列', '0', '15', null, '', '80', '1', '-', '60*60');
INSERT INTO `products` VALUES ('189', '踏步（黑色）', '瓷砖系列', '0', '30', null, '', '46', '1', '-', '48*80');
INSERT INTO `products` VALUES ('190', '踏步（大红色）', '瓷砖系列', '0', '35', null, '', '77', '1', '-', '48*80');
INSERT INTO `products` VALUES ('191', '梵诺诗', '瓷砖系列', '0', '0', null, '', '63', '1', '82F29', '800*800');
INSERT INTO `products` VALUES ('192', '卫生间门（内左）', '门系列', '0', '0', null, '', '2', '1', '-', '1cm*2m*80cm');
INSERT INTO `products` VALUES ('193', '卫生间门（内右）', '门系列', '0', '0', null, '', '2', '1', '1cm*2m*80cm', '-');
INSERT INTO `products` VALUES ('194', '不锈钢桌架', '龙头系列', '0', '0', null, '', '9', '1', '-', '-');
INSERT INTO `products` VALUES ('195', '清华紫光太阳能（20管）', '太阳能系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('196', '盼盼太阳能（20管）', '太阳能系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('197', '瓷砖（红）', '瓷砖系列', '0', '0', null, '', '12', '1', '-', '600*600');
INSERT INTO `products` VALUES ('198', '瓷砖（大红）', '瓷砖系列', '0', '0', null, '', '7', '1', '-', '600*600');
INSERT INTO `products` VALUES ('199', '瓷砖（黑）', '瓷砖系列', '0', '0', null, '', '14', '0', '-', '600*600');
INSERT INTO `products` VALUES ('200', '黑金花（黑）', '瓷砖系列', '0', '0', null, '', '18', '0', '-', '800*800');
INSERT INTO `products` VALUES ('201', '浴霸灯', '花洒系列', '0', '0', null, '', '3', '1', '-', '30*30');
INSERT INTO `products` VALUES ('202', '东牧菜盆', '其他', '0', '0', null, '', '1', '1', '7741', '-');
INSERT INTO `products` VALUES ('203', '龙脉石（黄）三片包装', '瓷砖系列', '0', '0', null, '', '54', '0', '-', '三片包装');
INSERT INTO `products` VALUES ('204', '固居大门锁', '门系列', '0', '0', null, '', '20', '1', '-', '-');
INSERT INTO `products` VALUES ('205', 'PPR管', 'PPR', '0', '26', null, '', '29', '5', '英科，玻纤管', '20*3.4*4m');
INSERT INTO `products` VALUES ('206', 'PPR管，英科', 'PPR', '0', '16', null, '', '39', '5', '', '20*2.8*4m');
INSERT INTO `products` VALUES ('207', '联塑管', 'PPR', '0', '36', null, '', '2', '1', '-', '20*3.4*3m');
INSERT INTO `products` VALUES ('208', '元畅玻纤管，白芯', 'PPR', '0', '26', null, '', '120', '5', '-', '20*2.8*4m');
INSERT INTO `products` VALUES ('209', '元畅PPR管', 'PPR', '0', '16', null, '', '60', '1', '-', '20*2.3*4m');
INSERT INTO `products` VALUES ('210', '活直接', 'PPR', '0', '4', null, '', '21', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('211', '直接,PPR管', 'PPR', '0', '3', null, '', '606', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('212', '内丝直接', 'PPR', '0', '7', null, '', '51', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('213', '内丝活直接（大头）', 'PPR', '0', '7', null, '', '17', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('214', '内丝活直接（小）', 'PPR', '0', '7', null, '', '21', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('215', '外丝活直接', 'PPR', '0', '8', null, '', '25', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('216', '外直接', 'PPR', '0', '8', null, '', '45', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('217', '内丝弯活接', 'PPR', '0', '7', null, '', '38', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('218', '弯头', 'PPR', '0', '4', null, '', '129', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('219', '弯头外丝', 'PPR', '0', '8', null, '', '23', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('220', '内丝弯', 'PPR', '0', '7', null, '', '84', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('221', '三通', 'PPR', '0', '4', null, '', '156', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('222', '三通内丝', 'PPR', '0', '7', null, '', '35', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('223', '三通外丝', 'PPR', '0', '8', null, '', '11', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('224', '活内丝三通', 'PPR', '0', '7', null, '', '36', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('225', '内丝座弯', 'PPR', '0', '7', null, '', '2', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('226', '过桥', 'PPR', '0', '4', null, '', '13', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('227', '双联', 'PPR', '0', '20', null, '', '12', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('228', 'PPR热熔堵头', 'PPR', '0', '1', null, '', '97', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('229', '管卡', 'PPR', '0', '6', null, '', '10', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('230', '塑料开关（一字形快开球阀）', 'PPR', '0', '25', null, '', '12', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('231', '塑料开关', 'PPR', '0', '8', null, '', '5', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('232', '虹丰（工程专用）PPR球阀', 'PPR', '0', '38.5', null, '', '3', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('233', '英科20球阀（纯铜心）', 'PPR', '0', '105', null, '', '11', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('234', '铝塑管', '铝塑', '0', '5', null, '', '200', '1', '-', 'PN20，单位米');
INSERT INTO `products` VALUES ('235', '三通，铝塑', '铝塑', '0', '3', null, '', '118', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('236', '三通内丝，', '铝塑', '0', '3', null, '', '52', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('237', '铝塑管，直接', '铝塑', '0', '3', null, '', '194', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('238', '铝塑管，内丝直接', '铝塑', '0', '3', null, '', '92', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('239', '铝塑管，外丝直接', '铝塑', '0', '3', null, '', '10', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('240', '铝塑管，内丝弯', '铝塑', '0', '3', null, '', '7', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('241', '铝塑管，90度弯头', '铝塑', '0', '3', null, '', '6', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('242', '铝塑管，开关', '铝塑', '0', '3', null, '', '6', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('251', '过门石，大红', '瓷砖系列', '0', '35', null, '', '28', '1', '-', '80*80');
INSERT INTO `products` VALUES ('252', '黑金纱', '瓷砖', '0', '45', null, '', '55', '1', '-', '80*80');
INSERT INTO `products` VALUES ('253', '筛网，淡黄', '瓷砖', '0', '45', null, '', '1', '1', '-', '80*80');
INSERT INTO `products` VALUES ('254', '红金沙', '瓷砖', '0', '45', null, '', '12', '1', '-', '60*90');
INSERT INTO `products` VALUES ('255', '黑金沙', '瓷砖', '0', '45', null, '', '18', '1', '-', '60*90');
INSERT INTO `products` VALUES ('256', '黑金沙（红，黑各两片）', '瓷砖系列', '0', '180', null, '', '4', '1', '-', '1m*1m');
INSERT INTO `products` VALUES ('257', '踏步（白色）', '瓷砖', '0', '28', null, '', '2', '1', '-', '48*80');
INSERT INTO `products` VALUES ('258', '踏步（枣红）', '瓷砖系列', '0', '0', null, '', '0', '1', '-', '48*80');
INSERT INTO `products` VALUES ('259', '踏步(白色)', '瓷砖系列', '0', '15', null, '', '100', '1', '-', '48*60');
INSERT INTO `products` VALUES ('260', '踏步（大红）', '瓷砖系列', '0', '18', null, '', '33', '1', '-', '48*60');
INSERT INTO `products` VALUES ('261', '踏步（枣红）', '瓷砖系列', '0', '17', null, '', '0', '1', '-', '48*60');
INSERT INTO `products` VALUES ('262', '踏步（黑色）', '瓷砖系列', '0', '15', null, '', '89', '1', '-', '48*60');
INSERT INTO `products` VALUES ('263', '踏步（红星）', '瓷砖系列', '0', '16', null, '', '20', '1', '-', '48*60');
INSERT INTO `products` VALUES ('264', '踏步（大红）', '瓷砖系列', '0', '16', null, '', '78', '1', '-', '60*60');
INSERT INTO `products` VALUES ('265', '踏步（枣红）', '瓷砖系列', '0', '15', null, '', '1', '1', '-', '60*60');
INSERT INTO `products` VALUES ('266', '80地脚线（黑带红花，薄）/单位：片', '瓷砖系列', '0', '3.5', null, '', '346', '10', '820', '800*100');
INSERT INTO `products` VALUES ('267', '80地脚线（黑带白花，薄）/单位：片', '瓷砖系列', '0', '3.5', null, '', '806', '10', '821', '800*100');
INSERT INTO `products` VALUES ('268', '80地脚线（黑带网花，厚）/单位：片', '瓷砖系列', '0', '4.5', null, '', '658', '10', '966', '800*100');
INSERT INTO `products` VALUES ('269', '80地脚线（黄带白花，厚）/单位：片', '瓷砖系列', '0', '4.5', null, '', '854', '10', '323', '800*100');
INSERT INTO `products` VALUES ('270', '80地脚线（白带绿，厚）/单位：片', '瓷砖系列', '0', '4.5', null, '', '683', '10', '15', '800*100');
INSERT INTO `products` VALUES ('271', '60地脚线（纯黑，薄）/单位：片', '瓷砖系列', '0', '1.5', null, '', '730', '10', '-', '800*100');
INSERT INTO `products` VALUES ('272', '60地脚线（黑带绿黄，薄）/单位：片', '瓷砖系列', '0', '1.5', null, '', '32', '10', '-', '800*100');
INSERT INTO `products` VALUES ('273', '黄仿古/单位：片', '瓷砖系列', '0', '12', null, '', '498', '5', '-', '600*600');
INSERT INTO `products` VALUES ('274', '麻木纹/单位：片', '瓷砖系列', '0', '12', null, '', '11', '5', '-', '60*60');
INSERT INTO `products` VALUES ('275', '等径直接（铜铝塑管）', '配件', '0', '8', null, '', '12', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('276', '等径弯头（铜铝塑管）', '配件', '0', '9', null, '', '15', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('277', '等径三通（铜铝塑管）', '配件', '0', '12', null, '', '18', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('278', '三通内丝（铜铝塑管）', '配件', '0', '12', null, '', '15', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('279', '座弯内丝（铜铝塑管）', '配件', '0', '9', null, '', '15', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('280', '外丝直径（铜铝塑管）', '配件', '0', '5', null, '', '16', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('281', '铜开关（铜铝塑管）', '配件', '0', '18', null, '', '3', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('284', '外丝直接（元畅）', 'PPR', '0', '8', null, '', '20', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('285', '活接快接阀（元畅，塑料）', 'PPR', '0', '28', null, '', '10', '1', '-', 'PN20');
INSERT INTO `products` VALUES ('286', '卫生墙瓷（白，单位：片）', '卫生墙瓷', '0', '4.5', null, '', '744', '1', '-', '30*45');
INSERT INTO `products` VALUES ('287', '卫生墙瓷（黄，单位：片）', '卫生墙瓷', '0', '7', null, '', '688', '1', '-', '30*60');
INSERT INTO `products` VALUES ('288', '卫生墙瓷（白牡丹花，单位：片）', '卫生墙瓷', '0', '6', null, '', '144', '1', '-', '30*60');
INSERT INTO `products` VALUES ('289', '卫生墙瓷（红粉色，单位：片）', '卫生墙瓷', '0', '7', null, '', '155', '1', '-', '30*60');
INSERT INTO `products` VALUES ('290', '卫生墙瓷（白带蓝菊，单位：片）', '卫生墙瓷', '0', '6', null, '', '1200', '1', '9603B', '300*600');
INSERT INTO `products` VALUES ('291', '八乡情哑光（暗方格，单位：片）', '卫生墙瓷', '0', '8', null, '', '1200', '1', '1001AX', '300*600');
INSERT INTO `products` VALUES ('292', '白暗带小叶片（单位：片）', '卫生墙瓷', '0', '7', null, '', '30', '1', '-', '300*600');
INSERT INTO `products` VALUES ('293', '八乡情上墙（亮色，单位：片）', '卫生墙瓷', '0', '7', null, '', '529', '1', '-', '300*600');
INSERT INTO `products` VALUES ('294', '八乡情下墙（暗色，单位：片）', '卫生墙瓷', '0', '7', null, '', '510', '1', '-', '300*600');
INSERT INTO `products` VALUES ('295', '腰线花片（单位：片）', '卫生墙瓷', '0', '7', null, '', '232', '1', '-', '300*600');
INSERT INTO `products` VALUES ('296', '防滑砖（红星，单位：片）', '防滑砖', '0', '4.5', null, '', '435', '1', '-', '30*30');
INSERT INTO `products` VALUES ('297', '防滑砖（方块，黄色，单位：片）', '防滑砖', '0', '4.5', null, '', '62', '1', '-', '30*30');
INSERT INTO `products` VALUES ('298', '防滑砖（鹅软石，暗色，单位：片）', '防滑砖', '0', '4.5', null, '', '645', '1', '-', '30*30');
INSERT INTO `products` VALUES ('299', '防滑砖（黄小花，单位：片）', '防滑砖', '0', '4.5', null, '', '615', '1', '-', '30*30');
INSERT INTO `products` VALUES ('300', '防滑砖（石籽琥珀釉，单位：片）', '防滑砖', '0', '7', null, '', '600', '1', 'Y35F025', '30*30');
INSERT INTO `products` VALUES ('301', '卫生墙瓷（厨房花片，单位：片）', '卫生墙瓷', '0', '15', null, '', '12', '1', '-', '300*600');
INSERT INTO `products` VALUES ('302', '卫生墙瓷（卫生间花片，单位：片）', '卫生墙瓷', '0', '15', null, '', '28', '1', '-', '300*600');
INSERT INTO `products` VALUES ('303', '不锈钢60脸盆（粉色）', '浴柜系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('304', '菜盆（单菜盆）', '其他', '0', '0', null, '', '8', '1', '-', '-');
INSERT INTO `products` VALUES ('305', '菜盆（双菜盆，康格斯）', '其他', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('306', '菜盆（VeiKa）', '其他', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('307', '4#正大立柱盆', '浴柜系列', '0', '0', null, '', '7', '1', '-', '-');
INSERT INTO `products` VALUES ('308', '正大蹲便器（S弯）', '座便器系列', '0', '0', null, null, '8', '1', null, null);
INSERT INTO `products` VALUES ('309', '拖把池（松良，小）', '浴柜系列', '0', '0', null, null, '1', '1', null, null);
INSERT INTO `products` VALUES ('310', '正大座便器', '座便器系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('311', '拖把池', '其他', '0', '0', null, '', '2', '1', '315', '-');
INSERT INTO `products` VALUES ('312', '正大马桶盖子', '其他', '0', '0', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('313', '防盗门（木纹漆）', '门系列', '0', '0', '', '', '1', '1', '', '860*2050');
INSERT INTO `products` VALUES ('314', '防盗门（木纹漆，丁级门，外右）', '门系列', '0', '0', null, null, '1', '1', null, '2050*860');
INSERT INTO `products` VALUES ('316', '合页（白色，优，单位：付）', '门系列', '0', '0', null, '', '10', '1', '-', '-');
INSERT INTO `products` VALUES ('317', '合页（白色，普通，单位：付）', '门系列', '0', '0', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('318', '发泡胺（小瓶，单位：瓶）', '其他', '0', '0', null, '', '15', '1', '-', '-');
INSERT INTO `products` VALUES ('319', '发泡胺（大瓶750mL,单位：瓶）', '其他', '0', '0', null, '', '16', '1', '-', '-');
INSERT INTO `products` VALUES ('320', '保温棉（细，单位：根）', '其他', '0', '0', null, '', '44', '1', '-', '-');
INSERT INTO `products` VALUES ('321', '保温棉（粗，单位：根）', '其他', '0', '0', null, '', '35', '1', '-', '-');
INSERT INTO `products` VALUES ('322', '紫铜大门（内包内开，单位：套）', '门系列', '0', '0', null, '', '1', '1', '-', '宽2800*高2500');
INSERT INTO `products` VALUES ('323', '菜盆（手工盆）', '其他', '0', '280', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('324', '壁挂浴霸（阳光）', '花洒系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('325', '集成浴霸（樱花）', '花洒系列', '0', '0', null, '', '1', '1', '-', '300*600');
INSERT INTO `products` VALUES ('326', '太阳能管', '太阳能系列', '0', '0', null, '', '7', '1', '-', '-');
INSERT INTO `products` VALUES ('327', '浴霸灯泡（照明灯泡）', '花洒系列', '0', '0', null, '', '11', '1', '-', '-');
INSERT INTO `products` VALUES ('328', '浴霸灯泡（取暖灯泡）', '花洒系列', '0', '0', null, '', '18', '1', '-', '-');
INSERT INTO `products` VALUES ('329', '推拉门（香槟拉丝）', '门系列', '0', '0', null, '', '0', '1', '-', '高2040*宽1640');
INSERT INTO `products` VALUES ('330', '东牧台上盆', '浴柜系列', '0', '0', null, '', '0', '1', '-', '-');
INSERT INTO `products` VALUES ('331', 'PVC板', '装修系列', '0', '26', null, '', '20', '1', '-', '330cm*30cm');
INSERT INTO `products` VALUES ('332', 'PVC板', '装修系列', '0', '28', null, '', '9', '1', '-', '360cm*30cm');
INSERT INTO `products` VALUES ('333', 'PVC板', '装修系列', '0', '24', null, '', '12', '1', '-', '300cm*30cm');
INSERT INTO `products` VALUES ('334', 'PVC板', '装修系列', '0', '0', null, '', '13', '1', '-', '170cm*30cm');
INSERT INTO `products` VALUES ('335', 'PVC板', '装修系列', '0', '0', null, '', '30', '1', '-', '300cm*20cm');
INSERT INTO `products` VALUES ('336', 'PVC板', '装修系列', '0', '0', null, '', '28', '1', '-', '350cm*20cm');
INSERT INTO `products` VALUES ('337', 'PVC板', '装修系列', '0', '28', null, '', '24', '1', '98035', '360cm*30cm');
INSERT INTO `products` VALUES ('338', '阳角条（PVC，1包60支，单位：支）', '装修系列', '0', '8', null, '', '84', '1', '-', '厚度1.2');
INSERT INTO `products` VALUES ('339', '阴角（PVC，单位：支）', '装修系列', '0', '8', null, '', '14', '1', '-', '-');
INSERT INTO `products` VALUES ('340', '石膏线（S型）', '装修系列', '0', '6', null, '', '112', '1', '-', '-');
INSERT INTO `products` VALUES ('341', '石膏线（荷花）', '装修系列', '0', '6', null, '', '24', '1', '-', '-');
INSERT INTO `products` VALUES ('342', '普通台上盆（椭圆形）', '浴柜系列', '0', '0', null, '', '1', '1', '-', '52cm*45cm');
INSERT INTO `products` VALUES ('343', '4公分条子(单位：根)', '装修系列', '0', '18', null, '', '7', '1', '-', '3m');
INSERT INTO `products` VALUES ('344', '3公分条子(单位：根)', '装修系列', '0', '15', null, '', '7', '1', '-', '2.5m');
INSERT INTO `products` VALUES ('345', '1公分条子（单位：根）', '装修系列', '0', '5', null, '', '23', '1', '-', '2.5m');
INSERT INTO `products` VALUES ('346', 'V型条子（单位：根）', '装修系列', '0', '5', null, '', '75', '1', '-', '-');
INSERT INTO `products` VALUES ('347', '粉墙条子（阴角，大孔，单位：根）', '装修系列', '0', '1', null, '', '150', '1', '-', '2.5m');
INSERT INTO `products` VALUES ('348', '粉墙条子（阳角，小孔，单位：根）', '装修系列', '0', '1', null, '', '120', '1', '-', '2.5m');
INSERT INTO `products` VALUES ('349', '木龙骨（单位：根）', '装修系列', '0', '7', null, '', '128', '1', '-', '-');
INSERT INTO `products` VALUES ('350', '紫金花（绿色新家园，净味，单位：桶）', '装修系列', '0', '0', null, '', '2', '1', '-', '5L');
INSERT INTO `products` VALUES ('351', '紫金花（超净味亮白，单位：桶）', '装修系列', '0', '0', null, '', '2', '1', 'E62-00', '20Kg');
INSERT INTO `products` VALUES ('352', '宝塔山（乐倍涂，墙角漆，单位：桶）', '装修系列', '0', '0', null, '', '1', '1', '-', '28Kg');
INSERT INTO `products` VALUES ('353', '宝塔山（申达，单位：桶）', '装修系列', '0', '0', null, '', '2', '1', '-', '181Kg');
INSERT INTO `products` VALUES ('354', '西铁百乳胺（大桶，单位：桶）', '装修系列', '0', '0', null, '', '3', '1', '-', '18Kg');
INSERT INTO `products` VALUES ('355', '金润莱白乳胶(小桶，单位：桶)', '装修系列', '0', '0', null, '', '1', '1', '-', '4Kg');
INSERT INTO `products` VALUES ('356', '倍雅晴防水（单位：桶）', '装修系列', '0', '0', null, '', '1', '1', '-', '19Kg');
INSERT INTO `products` VALUES ('357', '墙面王（单位：袋）', '装修系列', '0', '0', null, '', '64', '1', '-', '-');
INSERT INTO `products` VALUES ('358', '石膏粉（单位：袋）', '装修系列', '0', '0', null, '', '10', '1', '-', '-');
INSERT INTO `products` VALUES ('359', '腻子粉821（单位：袋）', '装修系列', '0', '0', null, '', '40', '1', '-', '-');
INSERT INTO `products` VALUES ('360', '砂浆王（单位：袋）', '装修系列', '0', '0', null, '', '15', '1', '-', '-');
INSERT INTO `products` VALUES ('361', '瓷砖（零散，单位：件）', '瓷砖系列', '0', '0', null, '', '16', '1', '-', '30*60');
INSERT INTO `products` VALUES ('362', '亿佳富瓷砖（单位：件）', '瓷砖系列', '0', '0', null, '', '8', '1', '82Y08', '80*80');
INSERT INTO `products` VALUES ('363', '瓷砖（单位：片）', '瓷砖系列', '0', '0', null, '', '4', '1', '80E06', '80*80');
INSERT INTO `products` VALUES ('364', '瓷砖（单位：件）', '瓷砖系列', '0', '0', null, '', '3', '1', '82F16', '80*80');
INSERT INTO `products` VALUES ('365', '瓷砖（黄牡丹花，单位：片）', '瓷砖系列', '0', '0', null, '', '10', '1', '-', '80*80');
INSERT INTO `products` VALUES ('366', '瓷砖（单位：片）', '瓷砖系列', '0', '0', null, '', '16', '1', '8DE21', '80*80');
INSERT INTO `products` VALUES ('367', '瓷砖（散装及样品，单位：片）', '瓷砖系列', '0', '0', null, '', '44', '1', '-', '80*80');
INSERT INTO `products` VALUES ('368', '防盗门把手（单活，内右，优，白色）', '门系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('369', '防盗门把手（内右，普，白色）', '门系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('370', '大门把手（内右）', '门系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('371', '大门把手（优，双河）', '门系列', '0', '0', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('372', '云石胶', '装修系列', '0', '0', null, '', '3', '1', '-', '3L');
INSERT INTO `products` VALUES ('373', '锁芯（钢质门，铜）', '门系列', '0', '0', null, '', '8', '1', '-', '10公分');
INSERT INTO `products` VALUES ('374', '锁芯（钢质门，铜）', '门系列', '0', '0', null, '', '9', '1', '-', '9公分');
INSERT INTO `products` VALUES ('375', '锁芯（钢质门，铜）', '门系列', '0', '0', null, '', '11', '1', '-', '85公分');
INSERT INTO `products` VALUES ('376', '锁芯（钢质门，铜）', '门系列', '0', '0', null, '', '8', '1', '-', '7公分');
INSERT INTO `products` VALUES ('377', '羊毛刷', '装修系列', '0', '0', null, '', '24', '1', '-', '10公分');
INSERT INTO `products` VALUES ('378', '中刷', '装修系列', '0', '0', null, '', '11', '1', '-', '4寸');
INSERT INTO `products` VALUES ('379', '中刷', '装修系列', '0', '0', null, '', '9', '1', '', '3寸');
INSERT INTO `products` VALUES ('380', '中刷', '装修系列', '0', '0', null, '', '9', '1', '-', '2寸');
INSERT INTO `products` VALUES ('381', '中刷', '装修系列', '0', '0', null, '', '3', '1', '-', '1寸');
INSERT INTO `products` VALUES ('382', '滚筒刷', '装修系列', '0', '0', null, '', '7', '1', '-', '-');
INSERT INTO `products` VALUES ('383', '接缝网带', '装修系列', '0', '0', null, '', '7', '1', '-', '-');
INSERT INTO `products` VALUES ('384', '接缝纸（大）', '装修系列', '0', '0', null, '', '6', '1', '-', '-');
INSERT INTO `products` VALUES ('385', '接缝纸（小）', '装修系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('386', '美纹纸（黄）', '装修系列', '0', '0', null, '', '39', '1', '-', '-');
INSERT INTO `products` VALUES ('387', '美纹纸（白）', '装修系列', '0', '0', null, '', '16', '1', '-', '-');
INSERT INTO `products` VALUES ('388', '防盗门把手（单活，内右，普，白色）', '门系列', '0', '0', null, '', '1', '1', '-', '-');
INSERT INTO `products` VALUES ('389', '填缝剂', '装修系列', '0', '0', null, '', '8', '1', '-', '-');
INSERT INTO `products` VALUES ('390', '水不漏', '装修系列', '0', '0', null, '', '5', '1', '-', '-');
INSERT INTO `products` VALUES ('391', '月圆明，球型锁', '门系列', '0', '0', null, '', '9', '1', '-', '-');
INSERT INTO `products` VALUES ('392', '奈我何球型锁（优）', '门系列', '0', '0', null, '', '2', '1', '-', '-');
INSERT INTO `products` VALUES ('393', '弹子锁', '门系列', '0', '0', null, '', '10', '1', '-', '-');
INSERT INTO `products` VALUES ('394', '卷门锁', '门系列', '0', '0', null, '', '3', '1', '-', '-');
INSERT INTO `products` VALUES ('395', '锁体（方形）', '门系列', '0', '0', null, '', '11', '1', '-', '-');
INSERT INTO `products` VALUES ('396', '锁体（圆形）', '门系列', '0', '0', null, '', '4', '1', '-', '-');
INSERT INTO `products` VALUES ('397', '龙脉石（黄的，单位：片）', '瓷砖系列', '0', '32', null, '', '162', '1', '-', '80*80');
INSERT INTO `products` VALUES ('398', '白+厚（优等，迪斯威尔，单位：片）', '瓷砖系列', '0', '33', null, '', '150', '1', '-', '80*80');
INSERT INTO `products` VALUES ('399', '麻点（单位：片）', '瓷砖系列', '0', '30', null, '', '120', '1', '8005', '80*80');
INSERT INTO `products` VALUES ('400', '金刚微晶石（优等，迪斯威尔，单位：片）', '瓷砖系列', '0', '42', null, '', '200', '1', '80E19', '80*80');
INSERT INTO `products` VALUES ('401', '金刚微晶石（迪斯威尔，单位：片）', '瓷砖系列', '0', '35', null, '', '6', '1', '80E07', '80*80');
INSERT INTO `products` VALUES ('402', '蝴蝶玉石（绿色，单位：片）', '瓷砖系列', '0', '26', null, '', '291', '1', '86D08', '80*80');
INSERT INTO `products` VALUES ('403', '百腾陶瓷（金刚微晶1级品，单位：片）', '瓷砖系列', '0', '36', null, '', '200', '1', '-', '80*80');
INSERT INTO `products` VALUES ('404', '雄青陶瓷（荷花，白带黄，单位：片）', '瓷砖系列', '0', '35', null, '', '279', '1', 'X08906', '80*80');
INSERT INTO `products` VALUES ('405', '鼎城陶瓷（普拉提，单位：片）', '瓷砖系列', '0', '36', null, '', '183', '1', '', '80*80');
INSERT INTO `products` VALUES ('406', '雄青陶瓷（绿花，单位：片）', '瓷砖系列', '0', '36', null, '', '450', '1', 'X089001', '80*80');
INSERT INTO `products` VALUES ('407', '世元陶瓷（普拉提，白色，单位：片）', '瓷砖系列', '0', '23', null, '', '54', '1', '-', '80*80');
INSERT INTO `products` VALUES ('408', '蝴蝶玉石（白色，单位：片）', '瓷砖系列', '0', '15', null, '', '252', '1', '-', '600*600');
INSERT INTO `products` VALUES ('409', '蝴蝶玉石（白色，单位：片）', '瓷砖系列', '0', '25', null, '', '33', '1', '-', '800*800');
INSERT INTO `products` VALUES ('410', '红木纹（耐磨釉面，单位：片）', '瓷砖系列', '0', '12', null, '', '510', '1', '-', '600*600');

-- ----------------------------
-- Table structure for `productsorder`
-- ----------------------------
DROP TABLE IF EXISTS `productsorder`;
CREATE TABLE `productsorder` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT NULL COMMENT '订单生成时间',
  `customer` varchar(255) DEFAULT NULL COMMENT '关联客户信息表ID',
  `totalamount` double DEFAULT NULL COMMENT '该笔订单利润',
  `payway` varchar(255) DEFAULT NULL COMMENT '付款方式；1为现金，2为微信，3为支付宝，4为银行转账',
  `debt` double DEFAULT NULL COMMENT '欠款金额',
  `progress` varchar(255) DEFAULT NULL COMMENT '订单进度;1为预付定金，2为欠款未完成，3为完结',
  `products` varchar(255) DEFAULT NULL COMMENT '购买商品列表',
  `owner` varchar(11) DEFAULT NULL COMMENT '产生该订单的店员，与people表相关联',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=gbk ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of productsorder
-- ----------------------------
INSERT INTO `productsorder` VALUES ('1', '2017-06-29 15:55:00', '1', '87654', '1', '0', '1', '76543', '2');
INSERT INTO `productsorder` VALUES ('20', '0000-00-00 00:00:00', '0', '89', '仙剑', '89', '完结', 'bgvfdcsx', '刘安');

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
