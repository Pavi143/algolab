
SELECT Posts.user_id, Posts.tags, Posts.content, Posts.creation_date
FROM Posts
INNER JOIN Followers ON Posts.user_id = Followers.follower_user_id
INNER JOIN Users ON Posts.user_id = Users.id
WHERE Followers.user_id = 2
ORDER BY Posts.creation_date DESC;

