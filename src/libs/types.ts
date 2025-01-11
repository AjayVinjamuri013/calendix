export type FromTo = {
    form : string,
    to : string
}

export type WeekDayName = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type BookingTimes = Record<WeekDayName, FromTo>;
