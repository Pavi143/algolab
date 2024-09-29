CREATE TABLE IF NOT EXISTS Users (
    id INT  PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Posts (
    id INT PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    post_type VARCHAR(50),
    content TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tags TEXT[],
    programming_languages VARCHAR(30),
    topic VARCHAR(30),
    answered BOOLEAN
);

CREATE TABLE IF NOT EXISTS Comments (
    id INT PRIMARY KEY,
    post_id INT REFERENCES Posts(id),
    user_id INT REFERENCES Users(id),
    content TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tags TEXT[]
);

CREATE TABLE IF NOT EXISTS Likes (
    id INT PRIMARY KEY,
    post_id INT REFERENCES Posts(id),
    user_id INT REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Notifications (
    id INT PRIMARY KEY,
    user_id INT REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Followers (
    id INT PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    follower_user_id INT REFERENCES Users(id)
);
CREATE TABLE IF NOT EXISTS Collective (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE IF NOT EXISTS CollectiveMembers (
    id INT PRIMARY KEY,
    collective_id INT REFERENCES Collective(id),
    user_id INT REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS UserPosts (
    id INT PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    post_id INT REFERENCES Posts(id)
);