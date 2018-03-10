

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

  }
  else if(userSelectionFromForm == "LargeEnvelopes(Flats)")
  {

  }
  else if(userSelectionFromForm == "First-ClassPackageService—Retail")
  {

  }

  var JSONdata = {selection: userSelectionFromForm}, weight: userEnterWeight, price: price;
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
