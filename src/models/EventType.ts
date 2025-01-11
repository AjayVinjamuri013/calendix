import { BookingTimes, FromTo, WeekDayName } from '@/libs/types';
import mongoose, { model, models } from 'mongoose';

const FromToSchema = new mongoose.Schema({
    from : String,
    to : String
})


type EventType = {
    email : string,
    title : string,
    description : string,
    length : number,
    bookingTimes : BookingTimes
}

const BookingSchema = new mongoose.Schema<Record<WeekDayName, FromTo>>({
    monday : FromToSchema,
    tuesday : FromToSchema,
    wednesday : FromToSchema,
    thursday : FromToSchema,
    friday : FromToSchema,
    saturday : FromToSchema,
    sunday  : FromToSchema,
})

const EventTypeSchema = new mongoose.Schema<EventType>({
    email : String,
    title : String,
    description : String,
    length : Number,
    bookingTimes : BookingSchema,
},{
    timestamps : true,
})

export const EventTypeModel = models?.EventType || model<EventType>('EventType',EventTypeSchema)