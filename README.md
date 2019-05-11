# Brocante
Brocante helps charities and others plan small one off sales.

It comprises a frontend (VueJS/Apollo) which integrates with data served by Hasura and various Lambdas.

____
### What type of events is this suitable for?
____
Brocante is designed to fit a particular model of sale:

- Individual Sellers registering their items through one or more 'collection points'. 
- Sellers set their own prices
- Sales are on a single day.
- Payments are deliberately excluded from the setup.
- Buyers can obtain reciepts for their items with a 'buyer number' for a specified period after the event.

___
### What does a process flow look like?
___
- Sellers register initially with an email, name, a preference for a collection point and optional additional data.
- Admin Staff can then confirm/deny registrations according to capacity/membership etc.
- Once confirmed sellers recieve email confirmation and can then login to the site to input details of their items, with prices.
- On completion sellers can access a PDF of Barcoded stickers to attach to items.
- The till operator role has access to a 'scanner' page which scans these barcodes, assembles a shopping cart and then finalises it when marked paid. Multiple till operators can work on the same cart until it is marked as paid.
- Non logged in users have the option to input a code given to them on the day in order to retrieve a pdf of the item descriptions and prices.
- Administrators have access to a variety of analytics, including average basket size, total sold by category etc.

___
### Deployment
___
Since this is designed for intermittent use by charities it should be deployable on low cost cloud infrastructure. It should be entirely possible to deploy and operate a reasonable sized sale on GCP Free tier.

Full deployment instructions are here 