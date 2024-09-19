document.getElementById('connect-wallet').onclick = function() {
    // Logic to connect to the TON wallet
    // After connecting, show the gift creation section
    document.getElementById('gift-creation').style.display = 'block';
};

document.getElementById('create-gift').onclick = function() {
    const amount = document.getElementById('amount').value;
    const users = document.getElementById('users').value;

    // Generate a unique link
    const uniqueCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const link = `https://MaybeYash.github.io/Cheque?Claim=${uniqueCode}`;

    // Display the link for claiming
    document.getElementById('message').innerHTML = `Congratulations! 🎉 Click your link to claim: <a href="${link}">${link}</a>`;
    document.getElementById('message').style.display = 'block';

    // Logic to handle expiration after 5 uses can be implemented here
};
