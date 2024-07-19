document.getElementById('booking-btn').addEventListener('click', function () {
    const phoneNumber = '+917510102065'; // Replace with the target phone number
    const message = 'Hello! I am interested in booking a slot for Netz turf. Please provide the available slots and details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    alert('You are being redirected to WhatsApp to book your slot. Please confirm your booking there.');
    window.location.href = whatsappUrl;
});
