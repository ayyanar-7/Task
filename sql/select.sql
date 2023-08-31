use school;
create table student(id int not null,
name varchar(30) not null,
dob date,
class_id int not null,
primary key(id),
foreign key(class_id));
insert into student(id, name, dept_id) values(4, "Kumar", 2);

select id, name, dept_id from student;
select count(id) as no_of_students from student;

create table subject(id int not null,
name varchar(30),
primary key(id));
drop table subject;
select id, name from subject;
show tables;

create table sub_term_map(id int,
sub_id int, t_id int)

insert into subject(id, name) values(1, "Tamil"),
(2, "English"),
(3, "Maths"),
(4, "Science"),
(5, "Social");

select id, name from subject;

drop table student;

create table class(id int,
name varchar(30),
primary key(id));

create table teacher(id int,
name varchar(30),
primary key(id));

create table term(id int,
name varchar(30),





















