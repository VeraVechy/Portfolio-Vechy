const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const sections = document.querySelectorAll('section');

console.log(toggleButton); // Check if toggleButton is selected correctly
console.log(body); // Check if body is selected correctly
console.log(sections); // Check if sections NodeList is populated correctly

toggleButton.addEventListener('click', () => {
   body.classList.toggle('dark-mode');

   // Toggle dark mode for each section
   sections.forEach(section => {
      section.classList.toggle('dark-mode');
   });

   console.log('Dark mode toggled');
});
