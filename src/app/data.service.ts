import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Injectable()
export class DataService {
  constructor() { }
  products;
  Create(newData){

  };

  //CRUD operation

  Read(){

    //Return dummy data...Read data logic goes here
    return [
    {
      "commission": null,
      "descriptionLong": "<li>Businessowners package or monoline general liability coverage tailored to meet their specific insurance needs </li><li><b>Key Coverage Features</b></li><li>Business owners package coverage form that automatically includes over 15 unique coverage enhancements </li><li>Ability to consider up to $500,000 in payroll & $1,000,000 in sales </li><li>Banket Additional Insured automatically included </li><li>Primary/Non-contributory wording/Waiver of Subrogation available </li><li>Up to $1,000,000/$2,000,000 in General Liability limits </li><li><b>Premier Craftsmen Endorsement </b></li><li>$10,000 limit for miscellaneous tools </li><li>$10,000 limit for installation floater </li><li>$1,000 limit for property in the insured’s care, custody or control </li><li><b>Can consider over 35 different trades, including: </b></li><li>Carpentry</li><li>Drywall Installation</li><li>Electrical Work</li><li>Floor Covering Installation</li><li>Interior Decorators</li><li>Landscaping</li><li>Painting/Paperhanging</li><li>Plumbing</li><li>Residential Cleaning</li><li>Tile, Stone, Marble, Mosaic or Terrazzo Work </li>",
      "descriptionShort": "Artisan Contractors Businessowners Policy - Now paying 12% commission with Westchester!",
      "fee": null,
      "id": "1024",
      "isNew": "false",
      "lob": null,
      "name": "Artisan Contractor-1",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/Westchester20160929.jpg",
      "productLineId": "COMM",
      "productPage": null,
      "stateId": null,
      "subProducts":null,
      "url": null,
      "vendorId": "WESTCHESTR",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    },
    {
      "commission": null,
      "descriptionLong": "<li>Businessowners package or monoline general liability coverage tailored to meet their specific insurance needs </li><li><b>Key Coverage Features</b></li><li>Business owners package coverage form that automatically includes over 15 unique coverage enhancements </li><li>Ability to consider up to $500,000 in payroll & $1,000,000 in sales </li><li>Banket Additional Insured automatically included </li><li>Primary/Non-contributory wording/Waiver of Subrogation available </li><li>Up to $1,000,000/$2,000,000 in General Liability limits </li><li><b>Premier Craftsmen Endorsement </b></li><li>$10,000 limit for miscellaneous tools </li><li>$10,000 limit for installation floater </li><li>$1,000 limit for property in the insured’s care, custody or control </li><li><b>Can consider over 35 different trades, including: </b></li><li>Carpentry</li><li>Drywall Installation</li><li>Electrical Work</li><li>Floor Covering Installation</li><li>Interior Decorators</li><li>Landscaping</li><li>Painting/Paperhanging</li><li>Plumbing</li><li>Residential Cleaning</li><li>Tile, Stone, Marble, Mosaic or Terrazzo Work </li>",
      "descriptionShort": "Artisan Contractors Businessowners Policy - Now paying 12% commission with Westchester!",
      "fee": null,
      "id": "2024",
      "isNew": "false",
      "lob": null,
      "name": "Artisan Contractor-2",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/Westchester20160929.jpg",
      "productLineId": "COMM",
      "productPage": null,
      "stateId": null,
      "subProducts":null,
      "url": null,
      "vendorId": "WESTCHESTR",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    },
    {
      "commission": null,
      "descriptionLong": "<li><i>For 1 to 4 family tenant occupied dwellings.  Special & basic forms available.</i></li><li>Up to $600,000 TIV</li><li>Can accommodate LLC, partnership, trust, etc., as named insureds</li><li>$1,000,000 liability</li><li>Credits available</li><li>Up to 10% Coverage B – Other Structures</li><li>20% to 50% Coverage C - Personal Property</li><li>20% Coverage E – Loss of Rental Income</li><li>Renovations acceptable up to $150,000 cost</li><li>Short term rental, vacation rental, and occupied condos all acceptable</li><li>Coastal risks acceptable with 2% wind deductible </li>",
      "descriptionShort": "1-4 Family Dwellings - Now paying 12% commission with AU Gold!",
      "fee": null,
      "id": 1009,
      "isNew": false,
      "lob": null,
      "name": "Dwelling 1-4 Family-1",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/AUGold20160929.jpg",
      "productLineId":"PERS",
      "productPage": null,
      "stateId": null,
      "subProducts": null,
      "url": null,
      "vendorId": "AUGOLD",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    },
    {
      "commission": null,
      "descriptionLong": "<li>Businessowners package or monoline general liability coverage tailored to meet their specific insurance needs </li><li><b>Key Coverage Features</b></li><li>Business owners package coverage form that automatically includes over 15 unique coverage enhancements </li><li>Ability to consider up to $500,000 in payroll & $1,000,000 in sales </li><li>Banket Additional Insured automatically included </li><li>Primary/Non-contributory wording/Waiver of Subrogation available </li><li>Up to $1,000,000/$2,000,000 in General Liability limits </li><li><b>Premier Craftsmen Endorsement </b></li><li>$10,000 limit for miscellaneous tools </li><li>$10,000 limit for installation floater </li><li>$1,000 limit for property in the insured’s care, custody or control </li><li><b>Can consider over 35 different trades, including: </b></li><li>Carpentry</li><li>Drywall Installation</li><li>Electrical Work</li><li>Floor Covering Installation</li><li>Interior Decorators</li><li>Landscaping</li><li>Painting/Paperhanging</li><li>Plumbing</li><li>Residential Cleaning</li><li>Tile, Stone, Marble, Mosaic or Terrazzo Work </li>",
      "descriptionShort": "Artisan Contractors Businessowners Policy - Now paying 12% commission with Westchester!",
      "fee": null,
      "id": "3024",
      "isNew": "false",
      "lob": null,
      "name": "Artisan Contractor-3",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/Westchester20160929.jpg",
      "productLineId": "COMM",
      "productPage": null,
      "stateId": null,
      "subProducts":null,
      "url": null,
      "vendorId": "WESTCHESTR",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    },
    {
      "commission": null,
      "descriptionLong": "<li><i>For 1 to 4 family tenant occupied dwellings.  Special & basic forms available.</i></li><li>Up to $600,000 TIV</li><li>Can accommodate LLC, partnership, trust, etc., as named insureds</li><li>$1,000,000 liability</li><li>Credits available</li><li>Up to 10% Coverage B – Other Structures</li><li>20% to 50% Coverage C - Personal Property</li><li>20% Coverage E – Loss of Rental Income</li><li>Renovations acceptable up to $150,000 cost</li><li>Short term rental, vacation rental, and occupied condos all acceptable</li><li>Coastal risks acceptable with 2% wind deductible </li>",
      "descriptionShort": "1-4 Family Dwellings - Now paying 12% commission with AU Gold!",
      "fee": null,
      "id": 2009,
      "isNew": false,
      "lob": null,
      "name": "Dwelling 1-4 Family-2",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/AUGold20160929.jpg",
      "productLineId":"PERS",
      "productPage": null,
      "stateId": null,
      "subProducts": null,
      "url": null,
      "vendorId": "AUGOLD",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    },
    {
      "commission": null,
      "descriptionLong": "<li><i>For 1 to 4 family tenant occupied dwellings.  Special & basic forms available.</i></li><li>Up to $600,000 TIV</li><li>Can accommodate LLC, partnership, trust, etc., as named insureds</li><li>$1,000,000 liability</li><li>Credits available</li><li>Up to 10% Coverage B – Other Structures</li><li>20% to 50% Coverage C - Personal Property</li><li>20% Coverage E – Loss of Rental Income</li><li>Renovations acceptable up to $150,000 cost</li><li>Short term rental, vacation rental, and occupied condos all acceptable</li><li>Coastal risks acceptable with 2% wind deductible </li>",
      "descriptionShort": "1-4 Family Dwellings - Now paying 12% commission with AU Gold!",
      "fee": null,
      "id": 3009,
      "isNew": false,
      "lob": null,
      "name": "Dwelling 1-4 Family-3",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/AUGold20160929.jpg",
      "productLineId":"PERS",
      "productPage": null,
      "stateId": null,
      "subProducts": null,
      "url": null,
      "vendorId": "AUGOLD",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    },
    {
      "commission": null,
      "descriptionLong": "<li><i>For 1 to 4 family tenant occupied dwellings.  Special & basic forms available.</i></li><li>Up to $600,000 TIV</li><li>Can accommodate LLC, partnership, trust, etc., as named insureds</li><li>$1,000,000 liability</li><li>Credits available</li><li>Up to 10% Coverage B – Other Structures</li><li>20% to 50% Coverage C - Personal Property</li><li>20% Coverage E – Loss of Rental Income</li><li>Renovations acceptable up to $150,000 cost</li><li>Short term rental, vacation rental, and occupied condos all acceptable</li><li>Coastal risks acceptable with 2% wind deductible </li>",
      "descriptionShort": "1-4 Family Dwellings - Now paying 12% commission with AU Gold!",
      "fee": null,
      "id": 4009,
      "isNew": false,
      "lob": null,
      "name": "Dwelling 1-4 Family-4",
      "productDisclaimer": "You will be redirected to another website where you can complete your request for a quote. <b><i>You are receiving an indication of pricing and/or coverage.   Please contact your Jimcor underwriter if better pricing or terms are needed and we'll do our best for you!  We are here to service you!</i></b>",
      "productImage": "http://content.jimcor.com/logos/Company/AUGold20160929.jpg",
      "productLineId":"PERS",
      "productPage": null,
      "stateId": null,
      "subProducts": null,
      "url": null,
      "vendorId": "AUGOLD",
      "webLink": null,
      "webProductId": 0,
      "webProductNameKey": null
    }
  ]
}

Update(updateData)
{
  //New information will be in array.  We can parse it or convert it to JSON and send to backend server.
};


Delele(id){
  //Only id will be sent to backend for deletion. 
};

}
