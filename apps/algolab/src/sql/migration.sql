CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    post_type VARCHAR(50),
    content TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tags TEXT[]
);

CREATE TABLE IF NOT EXISTS Comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES Posts(post_id),
    user_id INT REFERENCES Users(user_id),
    content TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tags TEXT[]
);

CREATE TABLE IF NOT EXISTS Likes (
    like_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES Posts(post_id),
    user_id INT REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS Followers (
    follower_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    follower_user_id INT REFERENCES Users(user_id)
);
CREATE TABLE IF NOT EXISTS Collective (
    collective_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE IF NOT EXISTS CollectiveMembers (
    collective_member_id SERIAL PRIMARY KEY,
    collective_id INT REFERENCES Collective(collective_id),
    user_id INT REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS UserPosts (
    user_post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    post_id INT REFERENCES Posts(post_id)
);