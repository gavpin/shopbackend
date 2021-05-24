// This file will contain the queries to the Seller table
const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/seller/all", (request, response) => {
  database.connection.query(`select * from seller`, (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/seller/id", (request, response) => {
  database.connection.query(
    `select * from seller where seller_id = ${request.query.id}`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

// a POST API to store the record received in the request
router.post("/seller/add", (request, response) => {
  database.connection.query(
    `insert into seller (seller_name, seller_wallet) values ('${request.body.name}','${request.body.wallet}')`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record saved successfully!");
      }
    }
  );
});

// POST + PUT = Body, GET + DELETE = Query
router.delete("/seller/delete", (request, response) => {
  database.connection.query(
    `delete from seller where seller_id = '${request.query.id}'`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record deleted successfully!");
      }
    }
  );
});

module.exports = {
  router,
};
