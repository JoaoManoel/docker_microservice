const amqp = require('amqplib/callback_api');

amqp.connect('amqp://messsagebroker', (err, conn) => {
  if (!err) {
    conn.createChannel((err, ch) => {
      const ex = 'payment_exchange'

      if (!err) {
        ch.assertExchange(ex, 'direct', {durable: false});
        ch.assertQueue('', {exclusive: true}, (err, q) => {
          ch.bindQueue(q.queue, ex, 'payment');
          ch.consume(q.queue, (msg) => {
            console.log(msg.content.toString());
          }, {noAck: true})
        });
      }
    });
  }
});
