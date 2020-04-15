const db = require('../store/db');
const server = require('../api/server');

// graceful_shutdown listens for some signals
// to properly cleanup before system shutdown
module.exports.graceful_shutdown = function(server_conn, db_conn){
    process.on('SIGTERM', handle)
    process.on('SIGINT', handle);
}

// handle handles the received signal
handle = async function() {
    let code = 0;
    console.log("Shutting down...\n");
    let server_shutdown = server.close();
    server_shutdown
        .catch(err => {
            console.log("Error in shutdown proces: "+err);
            code = 1; // Exit with error code
        })
        .then(() => db.close())
        .catch(err => {
            console.log("Error in shutdown proces: "+err);
            code = 1; // Exit with error code
        })
        .then(() => {
            console.log("Graceful shutdown.")
            process.exit(code);
        });
}
