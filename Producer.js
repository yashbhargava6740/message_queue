const { Queue } = require("bullmq");

const notification = new Queue('notification', { connection: {
    host: "127.0.0.1",
    port: 6379
  }});

const addJob = async () => {
    await notification.add('send notification', {
        message: "Helo ji",
        data: "This is my messge queue"
    });
};

addJob();