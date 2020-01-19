const onoffswitchElements = document.querySelectorAll('.onoffswitch');
for (const onoffswitchElement of onoffswitchElements) {
	onoffswitchElement.addEventListener('click', () => {
		onoffswitchElement.classList.toggle('onoffswitch_checked');

		const theme = document.querySelector('.theme');
		if (theme) {
			if (theme.classList.contains('theme_color_project-default')) {
				theme.classList.remove('theme_color_project-default');
				theme.classList.add('theme_color_project-inverse');
			} else {
				theme.classList.add('theme_color_project-default');
				theme.classList.remove('theme_color_project-inverse');
			}
		}
	});
}

const accordionItems = document.querySelectorAll('.e-accordion');
for (const accordionItem of accordionItems) {
	const short = accordionItem.querySelector('.e-accordion__short');
	if (short) {
		short.addEventListener('click', () => {
			const more = accordionItem.querySelector('.e-accordion__more');
			if (more) {
				more.classList.toggle('history__hide');
			}
		});
	}
};