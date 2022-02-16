// probelem 1
function seerToMon( seer ) {
    if ( typeof ( seer ) != "number" || seer < 0 ) {
        return 'Please enter a valid number of seer';
    }
    const mon = seer / 40;
    return mon;

}
let givenSeer = 250;
const convertToMon = seerToMon( givenSeer );
console.log( convertToMon );
// probelem 2
function totalSales( shirtsQuantity, pantsQuantity, shoesQuantity ) {
    if ( typeof ( shirtsQuantity ) != "number" || shirtsQuantity < 0 ) {
        return 'Please enter a valid number of shirtsQuantity';
    }
    else if ( typeof ( pantsQuantity ) != "number" || shirtsQuantity < 0 ) {
        return 'Please enter a valid number of pantsQuantity';
    }
    else if ( typeof ( shoesQuantity ) != "number" || shirtsQuantity < 0 ) {
        return 'Please enter a valid number of shoesQuantity';
    }
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const totalShirtsSell = shirtPrice * shirtsQuantity;
    const totalPantsSale = pantPrice * pantsQuantity;
    const totalShoesSale = shoePrice * shoesQuantity;
    const totalProductsSales = totalShirtsSell + totalPantsSale + totalShoesSale;
    return totalProductsSales;
}
let shirtsQuantity = 5;
let pantsQuantity = 5;
let shoesQuantity = 5;
const totalSalesPrice = totalSales( shirtsQuantity, pantsQuantity, shoesQuantity );
console.log( totalSalesPrice );
// probelem 3
function deliveryCost( tshirtsQuantity ) {
    let totalDeliveryCost = 0;
    if ( typeof ( tshirtsQuantity ) != "number" || tshirtsQuantity < 0 ) {
        return 'Please Enter a Valid Tshirts Quantity Using Numbers Only';
    }
    else if ( tshirtsQuantity <= 100 ) {
        totalDeliveryCost = tshirtsQuantity * 100;
        return totalDeliveryCost;
    }
    else if ( tshirtsQuantity > 100 && tshirtsQuantity <= 200 ) {
        let first100PiecesCost = 100 * 100;
        let restPieces = tshirtsQuantity - 100;
        let restPiecesCost = restPieces * 80;
        totalDeliveryCost = first100PiecesCost + restPiecesCost;
        return totalDeliveryCost;
    }
    else if ( tshirtsQuantity > 200 ) {
        let first100PiecesCost = 100 * 100;
        let Second100PiecesCost = 100 * 80;
        let restPieces = tshirtsQuantity - 200;
        let restPiecesCost = restPieces * 50;
        totalDeliveryCost = first100PiecesCost + Second100PiecesCost + restPiecesCost;
        return totalDeliveryCost;
    }
}
let orderdTshirts = 300;
let totalDeliveryCharge = deliveryCost( orderdTshirts );
console.log( totalDeliveryCharge );

// probelem 4
function perfectFriend( friendsName ) {
    let firstNameWith5cher = '';
    if ( typeof ( friendsName ) == "number" || typeof ( friendsName ) == "string" ) {
        return 'Please enter valid friends names using an array';
    }
    for ( const element of friendsName ) {
        if ( element.length == 5 ) {
            firstNameWith5cher = element;
            break;
        }
    }
    return firstNameWith5cher;
}
let friendsNames = [ 'Rahim Uddin  ', 'Md Akash', 'Urmi', 'karim', 'Anisha' ];
const nameWith5Character = perfectFriend( friendsNames );
console.log( nameWith5Character );