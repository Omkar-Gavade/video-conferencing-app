import mongoose, { Schema } from "mongoose";


const meetingSchema = new Schema(
    {
        user_id:{type: String},
        meetingSchema: {type: String, required: true},
        dete:{type: Date, default:Date.now, required: true}
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };