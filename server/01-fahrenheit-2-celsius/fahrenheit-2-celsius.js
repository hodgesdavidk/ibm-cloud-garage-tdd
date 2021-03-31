const fahrenheitToCelsius = (fahrDegrees) => { 
    return (fahrDegrees - 32) * (100) / (212 -32);;
};

module.exports = { fahrenheitToCelsius };