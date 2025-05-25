export interface User {
  id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Username: string;
  Password: string;
  PhoneNo: string;
  Country: string;
  City: string;
  PanNo: string;
  AadharNo: string;
}

export const userData: User[] = [
  {
    id: 1,
    FirstName: "First",
    LastName: "Last",
    Email: "firstlast@gmail.com",
    Username: "qwerty",
    Password: "12345",
    PhoneNo: "1234567890",
    Country: "India",
    City: "Jaipur",
    PanNo: "1234567890",
    AadharNo: "1234-5678-9012",
  },
];
