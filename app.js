// Get the button and all the light divs
const btn = document.getElementById("btn");
const div = document.querySelectorAll(".light");

btn.addEventListener("click", () => {
    // Find the currently active light
    const activeLight = Array.from(div).find(ele => ele.classList.contains("active"));

    // Remove the "active" class from all lights
    div.forEach(ele => {
        ele.classList.remove("active");
    });

    // Cycle to the next light
    if (activeLight) {
        // Check which light is currently active and toggle to the next
        const nextLight = activeLight.nextElementSibling || div[0];
        nextLight.classList.add("active");
    } else {
        // If no light is active, activate the red light
        div[0].classList.add("active");
    }
});
