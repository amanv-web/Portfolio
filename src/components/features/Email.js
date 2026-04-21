import emailjs from "emailjs-com";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    "service_781ksul",
    "template_mods4cj",
    form,
    "ULhc9oqHn9shIfXXj"
  );
};