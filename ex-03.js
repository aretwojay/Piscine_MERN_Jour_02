db.createCollection("students", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "id", "lastname", "firstname", "email", "phone", "validated", "admin" ],
          properties: {
             id: {
               bsonType: "int",
               description: "'id' must be an integer and is required",
             },
             lastname: {
                bsonType: "string",
                description: "'lastname' must be a string and is required",
             },  
             firstname: {
                bsonType: "string",
                description: "'firstname' must be a string and is required",
             },
             email: {
                 bsonType: "string",
                 // pattern:  "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$",
                 description: "'email' must be a string and is required",
             },
             phone: {
                 bsonType: "string",
                 // pattern: "^(\+33|0)[1-9](\d\d){4}$",
                 description: "'phone' must be valid and is required",
             },
             validated: {
                 enum: ['validated', 'in progress', 'rejected'],
                 description: "'validated' must contain validated|in progress|rejected",
             },
             admin: {
                bsonType: "bool",
                description: "'admin' must be a boolean and is required",
             }
          }
       }
    }
 } )