
INSERT INTO Users (email, password, profile_picture) VALUES
    ('user1@example.com', 'password1', 'profile1.jpg'),
    ('user2@example.com', 'password2', 'profile2.jpg'),
    ('user3@example.com', 'password3', 'profile3.jpg');


INSERT INTO Posts (user_id, post_type, content, tags) VALUES
    (1, 'text', 'This is a sample post by user 1.', '{"sample", "post"}'),
    (2, 'image', 'image1.jpg', '{"image", "sample"}'),
    (3, 'text', 'Another post, this time by user 3.', '{"sample", "text"}');


INSERT INTO Comments (post_id, user_id, content, tags) VALUES
    (1, 2, 'Nice post!', '{"nice", "comment"}'),
    (2, 1, 'Cool image!', '{"cool", "image"}'),
    (3, 2, 'Great text post!', '{"great", "text"}');


INSERT INTO Likes (post_id, user_id) VALUES
    (1, 3),
    (2, 3),
    (3, 1);


INSERT INTO Notifications (user_id) VALUES
    (1),
    (2),
    (3);


INSERT INTO Followers (user_id, follower_user_id) VALUES
    (1, 2),
    (1, 3),
    (2, 3);


INSERT INTO Collective (name, description) VALUES
   ('Tech Enthusiasts', 'A collective for technology enthusiasts.'),
    ('Photography Lovers', 'A collective for photography enthusiasts.'),
    ('Travel Explorers', 'A collective for travel enthusiasts.');

INSERT INTO CollectiveMembers (collective_id, user_id) VALUES
    (1, 1),
    (1, 2),
    (1, 3);


INSERT INTO UserPosts (user_id, post_id) VALUES
    (1, 1),
    (2, 2),
    (3, 3);
