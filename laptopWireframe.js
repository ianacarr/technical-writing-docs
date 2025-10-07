function navigateTo(tab) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active-tab'));

    const activeButton = document.querySelector(`[onclick="navigateTo('${tab}')"]`);
    if (activeButton) activeButton.classList.add('active-tab');
}

window.onload = () => navigateTo('home');