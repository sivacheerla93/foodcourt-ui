export class Foodcourts {
    id: Number;
    name: String;
    gst: String;
    validity: String;
    contact: {
        email: String;
        mobile: String;
    };
    password: String;
    address: {
        locality: String;
        city: String;
    };
    img: {
        data: Buffer;
        contentType: String;
    }
}