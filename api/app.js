const amqp = require('amqplib/callback_api');
const app = require('express')();
const helmet = require('helmet');
const cors = require('cors');

const ex = 'payment_exchange'
let channel = {};

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  amqp.connect('amqp://messsagebroker', (err, conn) => {
    if (!err) {
      conn.createChannel((err, ch) => {
        if (!err) {
          channel = ch;
          ch.assertExchange(ex, 'direct', {durable: false});
          this.ch = ch;
        }
      });
    }
  });
  res.json({status: 'OK'});
});

app.get('/payment', (req, res) => {
  channel.publish(ex, 'payment', new Buffer("payment request..."));
  res.json({status: 'OK', msg: 'Payment with success.'});
});

app.get('/payment/:card', (req, res) => {
  channel.publish(ex, 'payment', new Buffer(`request from ${req.params.card}...`));
  res.json({status: 'OK', msg: 'Payment with success.'});
});

app.listen(2003);
