SELECT p.*
FROM posts p
LEFT JOIN user_follows uf ON p.user_id = uf.followed_user_id
LEFT JOIN collective_posts cp ON p.id = cp.post_id
LEFT JOIN collectives cm ON cp.collective_id = cm.collective_id
WHERE 
    (:initialDisplay OR (
        CASE 
            WHEN LOWER(:category) = 'all' THEN true 
            ELSE LOWER(:category) = p.category 
        END
    AND 
        CASE 
            WHEN LOWER(:answered) = 'all' THEN true 
            ELSE (LOWER(:answered) = 'answered' AND p.answered = true) OR (LOWER(:answered) = 'unanswered' AND p.answered = false) 
        END
    AND 
        CASE 
            WHEN LOWER(:programmingLanguage) = 'all' THEN true 
            ELSE p.programming_languages = :programmingLanguage 
        END
    AND 
        (:followedOnly = false OR uf.user_id = :currentUserId OR cm.user_id = :currentUserId)
    AND 
        (p.user_id != :currentUserId)
    )
)
ORDER BY p.creation_date DESC;