function Flight() {
    const flights = [
        {price:4500, seats:2, typeOfSeat:["Business class"], airlinename:"Indigo"},
        {price:6700, seats:10, typeOfSeat:["Business class","Econony"], airlinename:"Vistara"},
        {price:4800, seats:10, typeOfSeat:["Business class","Econony","Prime"], airlinename:"Spice Jet"}
    ]
    const commands = [{airlinename:"Indigo",typeOfSeat:["Business class","Business class"]}, 
        {airlinename:"Vistara",typeOfSeat:["Business class","Business class","Economy","Economy"]},
        {airlinename:"Spice Jet",typeOfSeat:["Business class","Economy"]}];
    function getNbSeatsTotal() {
        let nbseat=0; let total=0;
        for (const command of commands) {
           let nbusiness=0; let neconomy=0;
           let price=0;
           for (const flight of flights) {if (flight.airlinename===command.airlinename) {price = flight.price;}}
           for (const seats of command.typeOfSeat) {
                if (command.typeOfSeat==="Business class") {
                    nbusiness++;
                    if (nbusiness >=2) total+=price*(1+10/100);}
                else if (command.typeOfSeat==="Economy") {
                    neconomy++;
                    if (neconomy >=2) total+=price*(1+5/100);}
                else total +=price;
                nbseat++;
           }
        }
        return {nbseats:nbseat, total:total};
    }
    const result = getNbSeatsTotal();
    return (<>
    <h4>total seat booked: {result.nbseats} </h4>
    <h4>total price: {result.total} </h4>
    </>);
}
export default Flight;
