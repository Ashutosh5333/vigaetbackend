class PriceCalculator {
    constructor(pricing) {
        this.pricing = pricing;
    }

    calculatePrice(totalDistance) {
        let totalPrice = this.pricing.fix_price * 100; 
        
        if (totalDistance > this.pricing.base_distance_in_km) {
            const extraDistance = totalDistance - this.pricing.base_distance_in_km;
            const extraPrice = extraDistance * (this.pricing.km_price * 100); 
            totalPrice += extraPrice;
        }

        return totalPrice / 100; 
        
    }
}

module.exports = PriceCalculator;
