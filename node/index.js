const cluster = require('cluster');
const logger = require('./utils/logger');

let  numCPUs = require('./settings/siteSettings.json').numCPUs;




const killTimeout = 30 * 1000;

if (cluster.isMaster) {

    for (let i = 0; i < numCPUs; i++) {

        cluster.fork();
    }


    cluster.on('exit', (worker, code, signal) => {



        logger("error", {type:"Worker died", req: worker.process.pid + " " + (signal || code)});
        cluster.fork();
    });

    process.on('warning', e => console.warn(e.stack));


    cluster.on('disconnect', function (worker) {

        logger("error", {type: "Cluster exit: "});

        

        cluster.fork();
    });

} else {

    require('./app.js');

    process.on('uncaughtException', function(err){

        console.log(10)
        console.log(err);

        try {

           logger("error", {type:"Error:  Reboot_ ", req: err});

            const killtimer = setTimeout(function() {
                process.exit(1);
            }, killTimeout);

            killtimer.unref();

            cluster.worker.disconnect();
        }

        catch (err) {

            logger("error", {type:"Error:  node_notReboot", req: err})


        }
    });
}

