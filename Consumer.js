const { Worker } = require("bullmq");

const worker = new Worker("notification", async (job) => {
    console.log(`Doing job ${job.id}`);
    await new Promise((res,rej) => {
        setTimeout(() => {
            res();   
        }, 5000)
    });
    console.log(`Sent notification ${job.id}`);
}, { connection: {
    host: "127.0.0.1",
    port: 6379
  }})

