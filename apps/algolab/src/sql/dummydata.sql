
INSERT INTO Users (id, email, password, profile_picture) 
VALUES
    (1, 'user1@example.com', 'password1', 'profile1.jpg'),
    (2, 'user2@example.com', 'password2', 'profile2.jpg'),
    (3, 'user3@example.com', 'password3', 'profile3.jpg'),
    (4, 'user4@example.com', 'password4', 'profile4.jpg'),
    (5, 'user5@example.com', 'password5', 'profile5.jpg'),
    (6, 'user6@example.com', 'password6', 'profile6.jpg'),
    (7, 'user7@example.com', 'password7', 'profile7.jpg'),
    (8, 'user8@example.com', 'password8', 'profile8.jpg'),
    (9, 'user9@example.com', 'password9', 'profile9.jpg'),
    (10, 'user10@example.com', 'password10', 'profile10.jpg');



INSERT INTO Posts (id,user_id, post_type, content, tags, programming_languages, topic, answered)
VALUES
    (1, 1, 'text', 'This is a sample post by user 1.', '{"sample", "post"}', 'Java', 'OS', true),
    (2, 2, 'image', 'image1.jpg', '{"image", "sample"}', 'JavaScript', 'Web Development', false),
    (3, 3, 'text', 'Another post, this time by user 3.', '{"sample", "text"}', 'C', 'OS', true),
    (4, 4, 'text', 'This is another post by user 4.', '{"sample", "text"}', 'Java', 'Web Development', false),
    (5, 1, 'image', 'image2.jpg', '{"image", "sample"}', 'Python', 'Data Science', true),
    (6, 5, 'text', 'Yet another post, this time by user 6.', '{"post", "text"}', 'C++', 'Programming', false),
    (7, 6, 'text', 'Post about SQL by user 7.', '{"database", "SQL"}', 'SQL', 'Databases', true),
    (8, 9, 'image', 'image3.jpg', '{"image", "photo"}', 'JavaScript', 'Web Development', false),
    (9, 10, 'text', 'Introduction to PHP.', '{"PHP", "web"}', 'PHP', 'Web Development', true),
    (10, 7, 'text', 'Post about Linux.', '{"Linux", "OS"}', 'Linux', 'Operating Systems', false);



INSERT INTO Comments (id, post_id, user_id, content, tags)
VALUES
    (1, 1, 2, 'Nice post!', '{"nice", "comment"}'),
    (2, 2, 1, 'Cool image!', '{"cool", "image"}'),
    (3, 3, 2, 'Great text post!', '{"great", "text"}'),
    (4, 4, 1, 'Another cool image!', '{"cool", "image"}'),
    (5, 5, 2, 'Interesting article!', '{"article", "interesting"}'),
    (6, 1, 1, 'Beautiful landscape!', '{"landscape", "photo"}'),
    (7, 2, 2, 'Awesome tutorial!', '{"tutorial", "awesome"}'),
    (8, 3, 1, 'Fun project!', '{"project", "fun"}'),
    (9, 4, 2, 'Informative infographic!', '{"infographic", "information"}'),
    (10, 5, 1, 'Thought-provoking quote!', '{"quote", "thought-provoking"}');

INSERT INTO Likes (id, post_id, user_id)
VALUES
    (1, 1, 3),
    (2, 2, 1),
    (3, 3, 2),
    (4, 4, 5),
    (5, 5, 6),
    (6, 6, 7),
    (7, 7, 8),
    (8, 8, 9),
    (9, 9, 10),
    (10, 10, 1);


INSERT INTO Notifications (id, user_id)
VALUES
    (1, 2),
    (2, 4),
    (3, 6),
    (4, 8),
    (5, 10),
    (6, 1),
    (7, 3),
    (8, 5),
    (9, 7),
    (10, 9);


INSERT INTO Followers (id, user_id, follower_user_id)
VALUES
    (1, 1, 2),
    (2, 2, 3),
    (3, 3, 4),
    (4, 4, 5),
    (5, 5, 6),
    (6, 6, 7),
    (7, 7, 8),
    (8, 8, 9),
    (9, 9, 10),
    (10, 10, 1);


INSERT INTO Collective (id, name, description)
VALUES
    (1, 'Tech Enthusiasts Group', 'A community for tech enthusiasts to discuss latest trends and technologies.'),
    (2, 'Programming Club', 'Club dedicated to learning and practicing programming languages.'),
    (3, 'Web Developers Association', 'Association focused on web development and design.'),
    (4, 'Data Science Collective', 'Group interested in exploring data science and analytics.'),
    (5, 'Cybersecurity Forum', 'Forum for discussing cybersecurity topics and best practices.'),
    (6, 'Open Source Collaborators', 'Community of developers contributing to open-source projects.'),
    (7, 'AI and Machine Learning Group', 'Group for AI and machine learning enthusiasts.'),
    (8, 'Frontend Developers Guild', 'Guild for frontend developers sharing knowledge and resources.'),
    (9, 'Backend Engineers Network', 'Network of backend engineers sharing insights and best practices.'),
    (10, 'Full Stack Developers Club', 'Club for developers interested in full stack development.');


INSERT INTO CollectiveMembers (id, collective_id, user_id)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 6),
    (7, 7, 7),
    (8, 8, 8),
    (9, 9, 9),
    (10, 10, 10);


INSERT INTO UserPosts (id, user_id, post_id)
VALUES
    (1, 1, 1),
    (2, 2, 2),
    (3, 3, 3),
    (4, 4, 4),
    (5, 5, 5),
    (6, 6, 6),
    (7, 7, 7),
    (8, 8, 8),
    (9, 9, 9),
    (10, 10, 10);
