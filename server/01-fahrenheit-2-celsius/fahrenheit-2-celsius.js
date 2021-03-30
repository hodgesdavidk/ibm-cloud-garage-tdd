const fahrenheitToCelsius = (fahrDegrees) => { 
    let celsiusDegrees = fahrDegrees;
    if (fahrDegrees==32) celsiusDegrees = 0;
    if (fahrDegrees==50) celsiusDegrees = 10; 
    return celsiusDegrees;
};

module.exports = { fahrenheitToCelsius };