ConstUser =require('../model/User');

const GetnewUser = async (req, res) =>{
const{ user, pwd } = req.body;
if (duplicate) return res,sendStatus(409); //conflict
}
;
exports.getAllTasks = function(req, res){
    Tasks.fund({}, function(err, data) {
        if(err) {
            res.send(err);
        }
    res.json(data);
});
};

exports.getItem = function(req, res) {
    Items.findById(req.params.taskId, function(err, data){
        if(err) {
            res.send(err);
        }
        res.json(data);
    });
};

exports.createUser = function(req, res) {
    const newUser = new User({
        name: req.body.name
    });
    newUser.save(function(err, data) {  
    if(err) {
        res.send(err);
    }
    res.json(data);
});
};
 
