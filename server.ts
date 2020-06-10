/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

 // server.ts


// If using IgxIconService to register icons

// Other optional depending on your application configuration

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs
  .readFileSync(path.join('dist/browser', 'index.html'))
  .toString();
const window = domino.createWindow(template);

// Ignite UI browser objects abstractions
(global as any).window = window;
(global as any).document = window.document;
(global as any).Event = window.Event;
(global as any).KeyboardEvent = window.KeyboardEvent;
(global as any).MouseEvent = window.MouseEvent;
(global as any).FocusEvent = window.FocusEvent;
(global as any).PointerEvent = window.PointerEvent;
(global as any).HTMLElement = window.HTMLElement;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
    return {
      left: '',
      right: '',
      top: '',
      bottom: ''
  };
};

(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


(global as any).object = window.object;
(global as any).navigator = window.navigator;
(global as any).localStorage = window.localStorage;
(global as any).DOMTokenList = window.DOMTokenList;


(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');


import 'zone.js/dist/zone-node';

import * as express from 'express';
import {join} from 'path';

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require("cors");


const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    //user name and password of email that works like server
    
    user: 'spincrewserver@gmail.com', // Enter here email address from which you want to send emails
    pass: 'spincrewserver11' // Enter here password for email account from which you want to send emails
  },
  tls: {
  rejectUnauthorized: false
  }
});

// Express server
export const app = express();
app.use(compression({ level: 6 }));

app.use(cors());

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');






// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let senderName = req.body.contactFormName;
  let senderEmail = req.body.contactFormEmail;
  let messageText = req.body.contactFormMessage;
  let simpleText = req.body.simpleText;
  //let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: ['mantasdaus@gmail.com'], //there should be email of final form receiver. 
    from: senderName,
    subject: 'laukineorchideja.lt',
    text: 'Užklausos siuntėjo vardas: ' + senderName + ' , el. pašto adresas: ' + senderEmail + ' , telefono numeris: ' + messageText + ' , kliento žinutė: ' + simpleText,
    replyTo: 'dausmantas@gmail.com'
  }
  
  console.log('server.ts   app.post method  '  + mailOptions);
  
  if (senderName === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  
  if (messageText === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (simpleText === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  transporter.sendMail(mailOptions, function (error, response) {
    console.log('server.ts   transporter.sendMail function  ' + transporter);
    
    if (error) {
      console.log('Klaida, prašome užregistruoti gedimą el. paštu info@ambimax.lt');
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});



app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });
