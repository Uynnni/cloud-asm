const Pool = require('pg').Pool

const pg_conn = new Pool({
    user: 'rpfrpxfqkuwzso',
    host: 'ec2-52-207-15-147.compute-1.amazonaws.com',
    database:'d6cj1o02cujmdf',
    password:'1a41a7e46f8ba54dc1180a5872924c436ce7541037732414a48428d17011b6a1',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})


module.exports = pg_conn