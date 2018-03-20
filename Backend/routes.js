var user = require('./modules/user');

var API_IDENTIFIER='/api';
var VERSION='/v1';
module.exports=function(app){
    
    app.post(API_IDENTIFIER+VERSION+'/client',user.registerUser);
    app.get(API_IDENTIFIER+VERSION+'/client',user.showUser);
    app.put(API_IDENTIFIER+VERSION+'/client',user.updateUser);
    app.delete(API_IDENTIFIER+VERSION+'/client',user.deleteUser);
    app.post(API_IDENTIFIER+VERSION+'/authclient',user.authUser);
    

}