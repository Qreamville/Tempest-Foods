type Form1 = {
  id: "email" | "fullName" | "phoneNumber";
  type: string;
  name: string;
}[];

type Form2 = {
  id: "date" | "deliveryLocation" | "landmark";
  type: string;
  name: string;
}[];

export const infoForm: Form1 = [
  { id: "email", type: "text", name: "Email address" },
  { id: "fullName", type: "text", name: "Full Name" },
  { id: "phoneNumber", type: "text", name: "Phone Number" },
];

export const deliveryForm: Form2 = [
  { id: "date", type: "date", name: "Select a delivery date" },
  { id: "deliveryLocation", type: "text", name: "Delivery location" },
  { id: "landmark", type: "text", name: "Landmark (optional)" },
];
