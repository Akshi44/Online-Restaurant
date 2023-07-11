var customercon=request("./signupconnection")
customercon.connect(function(error){
    if(error)throw error;

    customercon.query("select * from customer",function(error,result){
        if(error) throw error;

        console.log(result);
    })
})