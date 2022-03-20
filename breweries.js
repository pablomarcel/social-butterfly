$.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_state=washington&sort=type,name:asc",
    type: "GET",
    dataType: "json",
    success: function(result)
    {
        console.log(result);

        //console.log(result.Results[0].Make_Name)

        console.log()
    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status);
        console.log(thrownError);
    }
});