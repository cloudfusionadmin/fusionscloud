const { Client } = require('pg');

const client = new Client({
  user: 'zevebe',
  host: 'fusions-db.cbe8cewe0hdi.ap-southeast-2.rds.amazonaws.com',
  database: 'fusions-db',
  password: 'AND11092001zecca24',  // Ensure this is a string
  port: 5432,
  ssl: true,  // Disable SSL
});

client.connect()
  .then(() => {
    console.log('Connected to the database successfully!');
    client.end();
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });


