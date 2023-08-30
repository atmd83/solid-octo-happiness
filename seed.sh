curl -d '{ "type": "Personal - Current", "balance": 5870, "currency": "GBP", "usageType": "PERSONAL", "accountType": "CURRENT", "nickname": "xxxx0010" }' -H "Content-Type: application/json" -X POST http://localhost:3000/accounts/1
curl -d '{ "type": "Personal - Current", "balance": 15625, "currency": "GBP", "usageType": "PERSONAL", "accountType": "CURRENT", "nickname": "xxxx0011" }' -H "Content-Type: application/json" -X POST http://localhost:3000/accounts/1
curl -d '{ "type": "Business - Current", "balance": 607559, "currency": "GBP", "usageType": "BUSINESS", "accountType": "CURRENT", "nickname": "xxxx0005" }' -H "Content-Type: application/json" -X POST http://localhost:3000/accounts/1


curl -d '{ "date": "2023-08-28T10:02:14.147Z", "amount": 3029, "currency": "GBP", "description": "payment to Chairs LTD"}' -H "Content-Type: application/json" -X POST http://localhost:3000/transactions/1/1
curl -d '{ "date": "2023-08-23T10:02:14.147Z", "amount": 5839, "currency": "GBP", "description": "MISC"}' -H "Content-Type: application/json" -X POST http://localhost:3000/transactions/1/1
curl -d '{ "date": "2023-08-21T10:02:14.147Z", "amount": 584862, "currency": "GBP", "description": "payment to Porsche Ltd"}' -H "Content-Type: application/json" -X POST http://localhost:3000/transactions/1/1
curl -d '{ "date": "2023-08-17T10:02:14.147Z", "amount": 837, "currency": "GBP", "description": "payment to Rotherham News"}' -H "Content-Type: application/json" -X POST http://localhost:3000/transactions/1/1

