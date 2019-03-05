module.exports ={
    findAll: async (model) => {
        return await model.find({}, function(err, response) {
            if(err)
                return err;
            return response;
        });
    },
    findOne: async (model, obj) => {
        return await model.findOne(obj, function(err, response) {
            if(err)
                return err;
            return response;
        });
    },
    add: async (model) => {
        return await model.save((err) => {
            if(err)
                return err;
        });
    }
}