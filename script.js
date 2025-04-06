document.addEventListener('DOMContentLoaded', () => {
  const rules = document.querySelectorAll('.rule');
  const toggleButton = document.getElementById('toggleBtn');
  let rulesVisible = false;

  // Initially hide all rules
  rules.forEach(rule => {
      rule.style.opacity = '0';
      rule.style.transform = 'translateY(20px)';
  });

  // Function to show and animate the rules
  function showRules() {
      rules.forEach((rule, index) => {
          setTimeout(() => {
              rule.style.opacity = '1';
              rule.style.transform = 'translateY(0)';
              // Scroll to the current rule section as it animates
              rule.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, index * 500); // Delay each rule animation by 500ms
      });
      toggleButton.innerText = "Hide Rules"; // Change button text to "Hide Rules"
  }

  // Function to hide all rules
  function hideRules() {
      rules.forEach(rule => {
          rule.style.opacity = '0';
          rule.style.transform = 'translateY(20px)';
      });
      toggleButton.innerText = "Show Rules"; // Change button text to "Show Rules"
  }

  // Toggle between showing and hiding the rules when the button is clicked
  toggleButton.addEventListener('click', () => {
      if (rulesVisible) {
          hideRules();
      } else {
          showRules();
      }
      rulesVisible = !rulesVisible; // Toggle the state
  });
});
