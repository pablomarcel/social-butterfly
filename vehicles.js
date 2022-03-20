$.ajax({
    url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json",
    type: "GET",
    dataType: "json",
    success: function(result)
    {
        console.log(result);
        //console.log(result.results[0].Make_Name)
        //console.log(result.json())
        console.log(result.Results[0].Make_Name)
    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status);
        console.log(thrownError);
    }
});