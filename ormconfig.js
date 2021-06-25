/**
 * Configurações de bancos sqlite
 */
 module.exports =
 [
    {
        "name": "sqlite",
        "type": "sqlite", 
        "database": "./src/database/database.sqlite",
        "migrations": [process.env.TYPE_ORM_MIGRATIONS],
        "cli" : {
            "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
            "entitiesDir": process.env.TYPE_ORM_ENTITIES, 
        },
        "entities": [
            process.env.TYPE_ORM_ENTITIES_DIR, 
        ],
        "synchronize": true
    }
 ]