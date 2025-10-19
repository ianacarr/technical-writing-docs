function navigateTo(tab) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active-tab'));
	const scroll = document.getElementById(tab);
	const scrollPos = {'Home': 0, 'User Guide': 45, 'Troubleshooting': 445, 'FAQs': 855}
	if (scroll) {
		switch(tab) {
			case 'Home':
			case 'User Guide':
			case'FAQs':
			case'Troubleshooting':
				window.scrollTo({top: scrollPos[tab], behavior: "smooth", block: "start"})
				break;
		}
	}

    const activeButton = document.querySelector(`[onclick="navigateTo('${tab}')"]`);
    if (activeButton) activeButton.classList.add('active-tab');
}

window.onload = () => navigateTo('Home');