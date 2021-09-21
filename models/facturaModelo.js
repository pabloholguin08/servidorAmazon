const {model, Schema}=require('mongoose');
const FacturaModelo=Schema({
    producto:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
    precio:{
        type:Number,
        require:true
    },
    peso:{
        type:String,
        require:true
    },
    foto:{
        type:String,
        require:true
    }
});

module.exports=model('Factura',FacturaModelo);