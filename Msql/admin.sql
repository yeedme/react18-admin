/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : admin

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 11/10/2022 14:36:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `UserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名 主键名字不重复',
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码',
  `RealName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户实际名字',
  PRIMARY KEY (`UserName`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('a1', '123456', 'XiaoMing');
INSERT INTO `account` VALUES ('admin', 'admin', '哈哈');

-- ----------------------------
-- Table structure for datacard
-- ----------------------------
DROP TABLE IF EXISTS `datacard`;
CREATE TABLE `datacard`  (
  `UserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户名唯一识别码',
  `Title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '标题',
  `Number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '总体数据',
  `Trend` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '趋势 是否上升或者下降',
  `TrendPrecent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '上升或者下降百分比',
  `TrendDetails` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '上升或者下降具体数据'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of datacard
-- ----------------------------
INSERT INTO `datacard` VALUES ('a1', 'Total Sales', '78.741.2', 'rise', '7%', '456.3');
INSERT INTO `datacard` VALUES ('a1', 'Vistor', '736', 'rise', '1%', '7');
INSERT INTO `datacard` VALUES ('a1', 'Total Orders', '203', 'fall', '13%', '26');
INSERT INTO `datacard` VALUES ('a1', 'Refunded', '2', 'fall', '2%', '9');
INSERT INTO `datacard` VALUES ('admin', 'Total Sales', '89,758.4', 'rise', '7%', '37.1');
INSERT INTO `datacard` VALUES ('admin', 'Vistor', '2325', 'fall', '1%', '46');
INSERT INTO `datacard` VALUES ('admin', 'Total Orders', '4021', 'rise', '13%', '468');
INSERT INTO `datacard` VALUES ('admin', 'Refunded', '450', 'rise', '2%', '9');

-- ----------------------------
-- Table structure for orderdata
-- ----------------------------
DROP TABLE IF EXISTS `orderdata`;
CREATE TABLE `orderdata`  (
  `PaymentStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `OrderID` int NULL DEFAULT NULL,
  `Date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Price` decimal(10, 2) NULL DEFAULT NULL,
  `AvatarImg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderdata
-- ----------------------------
INSERT INTO `orderdata` VALUES ('paid', 'Lihua李', 190221, '2022-10-04', 58941.00, 'https://joeschmoe.io/api/v1/a', 'I am happy to take your donation; any amount will be greatly appreciated.I am happy to take your donation; any amount will be greatly appreciated.', '(+1)7135875', '798421@gmail.com');
INSERT INTO `orderdata` VALUES ('pending', 'Lisi', 17123, '2022-09-01', 135.24, 'https://joeschmoe.io/api/v1/2', 'The poor man is not he who is without a cent, but he who is without a dream.', '(+1)789453', '787788@k.com');
INSERT INTO `orderdata` VALUES ('cancelled', 'Das', 12381, '2022-10-04', 99.99, 'https://joeschmoe.io/api/v1/z', 'We don\'t stop playing because we grow old; we grow old because we stop playing.', '(+123)13255648', '112574@qq.com');
INSERT INTO `orderdata` VALUES ('cancelled', 'Chen', 123917, '2021-10-05', 7784.20, 'https://joeschmoe.io/api/v1/r', 'I think and that is all that I am.Wrinkles should merely indicate where smiles have been.', '(+573)12321222', '789@qwe.com');
INSERT INTO `orderdata` VALUES ('paid', 'Wan', 12392, '2022-10-04', 152.10, 'https://joeschmoe.io/api/v1/w', 'Wrinkles should merely indicate where smiles have been.Wrinkles should merely indicate where smiles have been.', '(+88)12346671', 'null');
INSERT INTO `orderdata` VALUES ('paid', 'Ku', 7887, '2022-09-29', 13.20, 'https://joeschmoe.io/api/v1/k', 'If I know what love is, it is because of you.Lose an hour in the morning, and you will spend all day looking for it.', '(+11)1357998', 'null');
INSERT INTO `orderdata` VALUES ('pending', 'Yu', 1201, '2022-09-29', 99.99, 'https://joeschmoe.io/api/v1/Y', 'Can you imagine what I would do if I could do all I can?', '(+99)78449621', '89-1231@2112.com');
INSERT INTO `orderdata` VALUES ('cancelled', 'ChenK', 7845, '2021-10-05', 136.30, 'https://joeschmoe.io/api/v1/C', 'He said he was not there yesterday; however, many people saw him there.', '(+7)78989', '888877@sa.com');

SET FOREIGN_KEY_CHECKS = 1;
