class PriceCalculator {
    constructor(pricing) {
        this.baseDistance = pricing.base_distance_in_km;
        this.basePrice = pricing.fix_price;
        this.kmPrice = pricing.km_price;
        this.itemType = pricing.item_id.type;  
    }

    calculatePrice(distance) {
        let totalPrice = this.basePrice;
        const additionalDistance = distance - this.baseDistance;

        if (additionalDistance > 0) {
            totalPrice += additionalDistance * this.getKmPrice();
        } else if (distance > 0 && distance <= 1.5) {
            totalPrice += distance * this.getNonPerishableKmPrice();
        }

        return totalPrice;
    }

    getKmPrice() {
        if (this.itemType === 'perishable') {
            return 1.5;
        } else {
            return 1;
        }
    }

    getNonPerishableKmPrice() {
        return 1; 
    }
}


module.exports = PriceCalculator;
