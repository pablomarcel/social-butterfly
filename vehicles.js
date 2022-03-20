$.ajax({
    url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json",
    type: "GET",
    dataType: "json",
    success: function(result)
    {
        console.log(result);

        console.log(result.Results[0].Make_Name)

        console.log()
    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status);
        console.log(thrownError);
    }
});