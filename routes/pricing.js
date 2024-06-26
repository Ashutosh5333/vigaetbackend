const express = require("express");
const PriceRouter = express.Router();
const Organization = require("../model/organization.model");
const Item = require("../model/item.model");
const Pricing = require("../model/pricing.model");
const PriceCalculator = require("../services/priceCalculate");
const {
  priceitem,
  organizationcreate,
  pricepost,
  calculateprice,
  Getorgnizationitem,
  Getitemlist,
  getPricing,
  updatePricing,
  Getallpricingdetail,
} = require("../controller/Price.controller");

PriceRouter.post("/create", organizationcreate);
PriceRouter.post("/item", priceitem);

PriceRouter.post("/pricing", pricepost);
PriceRouter.post("/calculate-price", calculateprice);

// Getallpricingdetail
PriceRouter.get("/allpricing", Getallpricingdetail);
PriceRouter.get("/pricing/:organization_id/:item_id", getPricing);

PriceRouter.patch("/pricing/:organization_id/:item_id", updatePricing);

PriceRouter.get("/getorg", Getorgnizationitem);
PriceRouter.get("/getitems", Getitemlist);

module.exports = PriceRouter;
