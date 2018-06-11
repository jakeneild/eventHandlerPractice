/*Practice
Your job is to create an object that represents a financial advisor and has the following properties and methods.

Company (enumerable, writable, property)
Specialty (enumerable, writable, property)
Name (enumerable, property)
Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
Worth (non-enumerable, method)
Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

Challenge
Use document.createElement to build & display an HTML component to display the advisor's name, company, and specialty.
Iterate over the advisor's portfolio and use document.createDocumentFragment along with document.createElement to display
 some HTML components representing each stock owned by the advisor.
*/
var advisor = Object.create({}, {
    company: {
        value: "Apple",
        writable: true,
        enumerable: true
    },
    speciality: {
        value: "Large corporate account management",
        writable: true,
        enumerable: true
    },
    name: {
        value: "Howard Jones",
        writable: false,
        enumerable: true
    },
    portfolio: {
        value: {
            apple: {value: 1224.54},
            google: {value: 1223.99},
            microsoft: {value: 4545.55},
            tesla: {value: 300.00}
        },
        writable: true,
        enumerable: false
    },
    worth: {
        value: function worth(){
            let total = 0;
            for(stock in advisor.portfolio){
                //console.log(stock);
                //console.log(advisor.portfolio[stock]);
                //console.log(advisor.portfolio[stock].value);
                total = total + advisor.portfolio[stock].value;
                console.log(total);
            };
            console.log("Net worth: ", total)
        },
        enumberable: false
    },
    sell: {
        value: function sell(what, quantity, price){
            let howMuch = quantity * price;
            if(advisor.portfolio[what] == undefined){
                console.log("You do not own that stock");
            } else if (advisor.portfolio[what].value < howMuch){
                console.log("You do not have enough stock to do that.")
            } else {
                advisor.portfolio[what].value = advisor.portfolio[what].value - howMuch;
                console.log("Sell check: ", advisor.portfolio)
            }
        },
        enumberable: false
    },
    buy: {
        value: function buy(what, quantity, price){
            let howMuch = quantity * price;
            if(advisor.portfolio[what] == undefined){
                advisor.portfolio[what].value = howMuch;
            } else {
                //console.log(advisor.portfolio[what])
                advisor.portfolio[what].value = advisor.portfolio[what].value + howMuch;
                console.log("Buy check: ",advisor.portfolio)
            }
        }
    }


}

)

console.log(advisor);
advisor.worth();
advisor.buy("apple", 2, 1999);
advisor.worth();
advisor.sell("apple", 2, 1999);
advisor.worth();
advisor.sell("zippy", 99, 100);

var frag = document.createDocumentFragment();

var mainDiv = document.createElement("div");
mainDiv.style.margin = "15px"
mainDiv.style.padding = "10px 10x 10px 30px"
mainDiv.id = "mainDiv"
mainDiv.display = "flex";
mainDiv.style.borderLeft = "1px solid black";

var nameElement = document.createElement("p");
nameElement.textContent = advisor.name;
mainDiv.appendChild(nameElement);

var company = document.createElement("p");
company.textContent = advisor.company;
mainDiv.appendChild(company);

var speciality = document.createElement("p");
speciality.textContent = advisor.speciality;
mainDiv.appendChild(speciality);

mainDiv.appendChild(document.createElement("br"))

for(e in advisor.portfolio){
    var newP = document.createElement("p");
    newP.textContent = `Name: ${e}`
    var newP2 = document.createElement("p");
    newP2.textContent = `Value: ${advisor.portfolio[e].value}`
    mainDiv.appendChild(newP);
    mainDiv.appendChild(newP2);
}

console.log(frag);
frag.appendChild(mainDiv);

document.querySelector("body").appendChild(frag);