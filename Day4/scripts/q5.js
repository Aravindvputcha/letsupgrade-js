/*

<!-- Question 5:
You are managing a sales department for your company, you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
Then log the total commission earned by him. 

*/

let user_sales=[10010,20020, 1050,7500 ,10000]

let commission_percent= []

for (i=0;i<=user_sales.length; i++){

    if (user_sales[i]> 20000){
        let value= ((user_sales[i]*10)/100)
        commission_percent.push(value)
        console.log(`commision obtained by user ${i+1} is ${value}`)
    }
    else if (user_sales[i]>= 10000 && user_sales[i]< 20000){
        let value= ((user_sales[i]*7)/100)
        commission_percent.push(value)
        console.log(`commision obtained by user ${i+1} is ${value}`)
    }
    else if (user_sales[i]>= 5000 && user_sales[i]< 10000){
        let value= ((user_sales[i]*5)/100)
        commission_percent.push(value)
        console.log(`commision obtained by user ${i+1} is ${value}`)
    }
    else if (user_sales[i]>= 0 && user_sales[i]< 5000){
        let value= ((user_sales[i]*2)/100)
        commission_percent.push(value)
        console.log(`commision obtained by user ${i+1} is ${value}`)
    }
}