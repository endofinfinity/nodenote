-- 用户信息表
create table `ev_users` (
    `id` int not null auto_increment,
    `username` varchar(255) not null,
    `password` varchar(255) not null,
    `nickname` varchar(255) null,
    `email` varchar(255) null,
    `user_pic` TEXT null,
    primary key(`id`),
    unique index `id_unique` (`id` asc) visible,
    unique index `username_unique` (`username` asc) visible

) comment = '用户信息表';

-- 文章分类数据表
create table `ev_article_cate` (
    `id` int not null auto_increment,
    `name` varchar(255) not null,
    `alias` varchar(255) not null,
    `is_delete` tinyint(1) not null default 0 comment '0 没有被删除,1 被删除',
    primary key(`id`),
    unique index `id_unique` (`id` asc) visible,
    unique index `name_unique` (`name` asc) visible,
    unique index `alias_unique` (`alias` asc) visible

) comment = '文章分类数据表';
-- 插入数据
insert into ev_article_cate (name,alias) values ('科技','KeJi'),('历史','LiShi');

-- 文章表
create table `ev_articles` (
    `id` int not null auto_increment,
    `title` varchar(255) not null,
    `content` TEXT not null,
    `cover_img` varchar(255) not null,
    `pub_date` varchar(255) not null,
    `state` varchar(255) not null,
    `is_delete` tinyint(1) not null default 0 comment '0 没有被删除,1 被删除',
    `cate_id` int not null,
    `author_id` int not null,
    primary key(`id`),
    unique index `id_unique` (`id` asc) visible
) comment = '文章表';
