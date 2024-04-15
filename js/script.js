function toggleContent(event) {
	const clickedElement = event.target; // The element that was clicked

	// Check if clicked element is the icon or its parent (heading)
	const toggleIcon = clickedElement.classList.contains('toggle-icon')
		? clickedElement
		: clickedElement.querySelector('.toggle-icon');
	const heading = toggleIcon.parentNode; // The h2 element
	const contentElement = heading.nextElementSibling; // The next sibling (content div)

	// Toggle the content visibility
	if (contentElement.style.display === 'none' || contentElement.style.display === '') {
		contentElement.style.display = 'block';
		toggleIcon.innerHTML = '&#9660;'; // Change icon to down-pointing triangle
	} else {
		contentElement.style.display = 'none';
		toggleIcon.innerHTML = '&#9658;'; // Change icon to right-pointing triangle
	}
}

// Attach the toggle event handler to all headings with toggle icons
document.querySelectorAll('.toggle-icon').forEach(function (icon) {
	// Initially hide the content under each heading
	icon.parentNode.nextElementSibling.style.display = 'none';

	// Add event listener for click event (target the parent h2)
	icon.parentNode.addEventListener('click', toggleContent);
});
