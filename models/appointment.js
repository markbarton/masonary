const mongoose = require("mongoose");
const Log = require("./log");
const AppointmentSlot = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
    },
    date_key: {type: String},
    date_time_key: {type: String}, // This will be unique for this
    slot_date: {type: Date},
    start_time: {type: Date}, // Will be a time
    duration: {type: Number},
    consultant: {
        logname: {type: String},
        name: {type: String},
        staff_number: {type: String},
        travel_department: {type: String},
        travel_centre: {type: String},
        push_notification_sent: {type: Date},
        push_notification_sent_to: {type: String},
    },
    customer_data: {
        gift_card_id: {type: String},
        title: {type: String},
        first_name: {type: String},
        last_name: {type: String},
        age: {type: String},
        phone_number: {type: String},
        email: {type: String},
        postcode: {type: String},
        address1: {type: String},
        address2: {type: String},
        address3: {type: String},
        pref_date: {type: Date},
        pref_time: {type: String},
        destination: {type: String},
        departure_date: {type: Date},
        additional_information: {type: String},
        optin: {type: String},
        travel_class: {type: String},
        created: {type: Date},
        reminder_email_sent: {type: Date},
    },
    emails: {
        customer_initial_email: {
            sent: {type: Date},
            sendto: {type: String},
            subject: {type: String},
            body: {type: String},
        },
        tf_initial_email: {
            sent: {type: Date},
            sendto: {type: String},
            subject: {type: String},
            body: {type: String},
        },
        customer_booked_email: {
            sent: {type: Date},
            sendto: {type: String},
            subject: {type: String},
            body: {type: String},
        },
        customer_warning_email: {
            sent: {type: Date},
            sendto: {type: String},
            subject: {type: String},
            body: {type: String},
        },
        customer_chase_email: {
            sent: {type: Date},
            subject: {type: String},
            body: {type: String},
        },
    },
    goto_meeting: {
        client_email_sent: {type: Boolean, default: false},
        organiser: {
            username: {type: String},
            id: {type: String},
        },
        request: {
            subject: {type: String},
            startTime: {type: Date},
            endTime: {type: Date},
            passwordRequired: {type: Boolean, default: false},
            conferenceCallInfo: {type: String, default: "VOIP"},
            meetingType: {type: String, default: "SCHEDULED"},
        },
        response: {
            conferenceCallInfo: {type: String},
            meetingid: {type: String},
            uniqueMeetingId: {type: String},
            joinURL: {type: String},
            organiserURL: {type: String},
            maxParticipants: {type: Number},
        },
    },
    location: {type: String},
    status: {type: String, default: "Available"},
    audit: [{type: mongoose.Schema.Types.ObjectId, ref: "Log"}],
});
module.exports = mongoose.model("Appointment", AppointmentSlot);
