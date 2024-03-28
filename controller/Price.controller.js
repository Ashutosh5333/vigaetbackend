const mongoose = require("mongoose")
const Organization = require('../model/organization.model');
const Item = require('../model/item.model');
const Pricing = require('../model/pricing.model');
const PriceCalculator = require('../services/priceCalculate');


//    Get orgnization data

  
  
const Getorgnizationitem = async (req, res) => {
    try {
        const item = await Organization.find()
       
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//   get item list 

  
const Getitemlist = async (req, res) => {
    try {
        const item = await Item.find()
       
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const priceitem = async (req, res) => {
    try {
        const { type, description } = req.body;
        
        const item = new Item({ type, description });
        await item.save();
        
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create organization 

const organizationcreate =  async (req, res) => {
    try {
        const { name } = req.body;

        const existingOrganization = await Organization.findOne({ name });
        if (existingOrganization) {
            return res.status(400).json({ message: 'Organization already exists' });
        }

        const organization = new Organization({ name });
        await organization.save();

        res.status(201).json({ organization });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ------------------------  Pricing  --------------------------- //

   const pricepost = async (req, res) => {
    try {
        const { organization_id, item_id, zone, base_distance_in_km, km_price, fix_price } = req.body;

        const pricing = new Pricing({
            organization_id,
            item_id,
            zone,
            base_distance_in_km,
            km_price,
            fix_price
        });

        await pricing.save();

        res.status(201).json(pricing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//  

     const calculateprice  = async (req, res) => {
    try {
        const { zone, organization_id, total_distance, item_type,item_id } = req.body;
            //   console.log("bodyyyy",req.body)


        // Find organization
        const organization = await Organization.findOne({ _id: organization_id });
        if (!organization) {
            return res.status(404).json({ message: 'Organization not found' });
        }
        // console.log("organization",organization)
        
        // Find item
        
        const item = await Item.findOne({_id:item_id });
        // console.log("itemmm",item)
        if (!item) {
            return res.status(404).json({ message: 'items not found' });
        }

        let itemType = 'perishable'
        if (item) {
            itemType = item.type;
        } else {
            // console.log("Item not found, defaulting to non-perishable");
            return res.status(404).json({ message: ' non-perishable items' });
        }
         if(item.km_price<1.5){
            return res.status(404).json({ message: ' non-perishable items' });
         }
        // console.log("itemmm2",item)
    
    //  
        const pricing = await Pricing.findOne({
            organization_id:organization_id,
            item_id:item_id
        });

        // console.log("pricning",pricing)

        if (!pricing) {
            return res.status(404).json({ message: 'Pricing not found' });
        }
        const priceCalculator = new PriceCalculator(pricing);
        const totalPrice = priceCalculator.calculatePrice(total_distance);

        res.status(200).json({ total_price: totalPrice });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


 module.exports ={priceitem,pricepost,calculateprice,organizationcreate , Getorgnizationitem,Getitemlist}