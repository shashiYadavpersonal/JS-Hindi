const accountId = 1233545
var accountPassword = "12345"
let accountEmail = 'shashi.ranjanyd@gmail.com'
accountCity = "Jaipur"
accountState = null ;

accountEmail = "sr@yd.com"
accountCity = 'Rosera'
accountPassword = "223344"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountCity, accountPassword, accountId,accountState])

console.log(typeof null) // object


