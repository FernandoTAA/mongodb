db.createUser(
    {
        user: "test",
        pwd: "123",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
)
