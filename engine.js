

function calculateAmountOwedByWeight(userSelectionFromForm, userEnterWeight)
{
  var price = 0;

  if(userSelectionFromForm == "Letters(Stamped)")
  {
    if(userEnterWeight < 2)
    {
      price = 0.50;
    }
    else if(userEnterWeight < 3)
    {
      price = 0.71;
    }
    else if(userEnterWeight < 3.5)
    {
      price = 0.92;
    }
    else
    {
      price = 1.13;
    }
  }
  else if(userSelectionFromForm == "Letters(Metered)")
  {
    if(userEnterWeight < 2)
    {
      price = 0.47;
    }
    else if(userEnterWeight < 3)
    {
      price = 0.68;
    }
    else if(userEnterWeight < 3.5)
    {
      price = 0.89;
    }
    else
    {
      price = 1.10;
    }
  }
  else if(userSelectionFromForm == "LargeEnvelopes(Flats)")
  {
    if(userEnterWeight < 2)
    {
      price = 1.00;
    }
    else if(userEnterWeight < 3)
    {
      price = 1.21;
    }
    else if(userEnterWeight < 4)
    {
      price = 1.42;
    }
    else if(userEnterWeight < 5)
    {
      price = 1.63;
    }
    else if(userEnterWeight < 6)
    {
      price = 1.84;
    }
    else if(userEnterWeight < 7)
    {
      price = 2.05;
    }
    else if(userEnterWeight < 8)
    {
      price = 2.26;
    }
    else if(userEnterWeight < 9)
    {
      price = 2.47;
    }
    else if(userEnterWeight < 10)
    {
      price = 2.68;
    }
    else if(userEnterWeight < 11)
    {
      price = 2.89;
    }
    else if(userEnterWeight < 12)
    {
      price = 3.10;
    }
    else if(userEnterWeight < 13)
    {
      price = 3.31;
    }
    else
    {
      price = 3.52;
    }
  }
  else if(userSelectionFromForm == "First-ClassPackageService—Retail")
  {

    if(userEnterWeight < 5)
    {
      price = 3.50;
    }
    else if(userEnterWeight < 9)
    {
      price = 3.75;
    }
    else if(userEnterWeight < 10)
    {
      price = 4.10;
    }
    else if(userEnterWeight < 11)
    {
      price = 4.45;
    }
    else if(userEnterWeight < 12)
    {
      price = 4.80;
    }
    else if(userEnterWeight < 13)
    {
      price = 5.15;
    }
    else
    {
      price = 5.50;
    }
  }

  price = parseFloat(Math.round(price * 100) / 100).toFixed(2);

  var JSONdata = {selection: userSelectionFromForm, weight: userEnterWeight, amountOwed: price};
  return JSONdata;
}

function sendData(request, responce)
{
  var userSelectionFromForm = request.query.userSelection
  var userEnterWeight = request.query.weight

  var JSONdata = calculateAmountOwedByWeight(userSelectionFromForm, userEnterWeight);
  responce.render('results', JSONdata); // display the results page and pass data to it
}


//export the function to our server
module.exports = {sendData :sendData};
