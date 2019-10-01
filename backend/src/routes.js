const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

/*
req.query
req.params
req.body
*/
/*routes.post('/users', (req, res) => {
    //return res.send('nasceu');
    //return res.json({ idade: req.query.idade });
    return res.json(req.body);
});*/

const routes = express.Router();
const upload = multer(uploadConfig);
 
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;