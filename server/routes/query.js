const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Parser } = require('node-sql-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'db-mysql-nyc1-82787-do-user-9261117-0.b.db.ondigitalocean.com',
    user     : 'doadmin',
    password : 'c3vxt9ueyg2g0j06',
    database : 'defaultdb'
});

// @route   GET api/query/
// @desc    Make a sql query to db
// @access  Public
router.get('/', 
    [check('sqlQuery', 'SQL Query is required').not().isEmpty(),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let {
        sqlQuery,
    } = req.body;

	try {
        connection.connect();

        const parser = new Parser();
        const ast = parser.astify(sqlQuery);
		res.send({"sqlQuery": ast});
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;