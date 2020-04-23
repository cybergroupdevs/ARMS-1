const mongoose=require("mongoose");
const objectId=mongoose.Schema.Types.objectId;
const interview=require("./interview");
const candidate=require("./candidate");
const employee=require("./employee");
// const criteria=require("./criteria");
module.exports={
  interviewObjId:{
      type:objectId,
      ref:"interview"
   },
  candidateObjId:{
      type:objectId,
      ref:"candidate"
   },
  recommendedBy:[{
      type:objectId,
      ref:"employee"
    }],
    interviewer:[{
        type:objectId,
        ref:"employee"
    }],
    roundNumber:{
       type:objectId,
       ref:interview.rounds
    },
    logical:{
       marks:{
           type:Number,
           required:true
       },
       remarks:{
           type:String,
           required:true
       }
    },
    aptitude:{
        marks:{
            type:Number,
            required:true
        },
        remarks:{
            type:String,
            required:true
        }
    },
    communiation:{
        marks:{
            type:Number,
            required:true
        },
        remarks:{
            type:String,
            required:true
        }
    },
    venue:{
        type:String,
        minlength:2,
        maxlength:20
    },
    feedback:{
        type:String,
        minlength:2,
        maxlength:100
    },
    roundResult:{
        type:String,
        enum:['success','failure','un-clear']
    }
}