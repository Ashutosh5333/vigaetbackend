const express = require('express');
const PriceRouter = express.Router();
const Organization = require('../model/organization.model');
const Item = require('../model/item.model');
const Pricing = require('../model/pricing.model');
const PriceCalculator = require('../services/priceCalculate');
const { priceitem, organizationcreate, pricepost, calculateprice, Getorgnizationitem } = require('../controller/Price.controller');


   PriceRouter.post("/item",priceitem)
   PriceRouter.post("/create",organizationcreate)
   PriceRouter.post("/pricing",pricepost)
   PriceRouter.post("/calculate-price",calculateprice)
   PriceRouter.get("/getorganization",Getorgnizationitem)



module.exports = PriceRouter;
