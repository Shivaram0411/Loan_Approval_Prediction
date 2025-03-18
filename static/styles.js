document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const steps = document.querySelectorAll(".step");

    let currentStep = 0;

    function updateStep() {
        formSteps.forEach((step, index) => {
            step.style.display = index === currentStep ? "block" : "none";
            step.style.opacity = index === currentStep ? "1" : "0";
        });

        steps.forEach((step, index) => {
            step.classList.toggle("active", index <= currentStep);
        });

        console.log(`Current Step: ${currentStep + 1}`);
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (validateStep(currentStep)) {
                if (currentStep < formSteps.length - 1) {
                    currentStep++;
                    updateStep();
                }
            } else {
                alert("Please fill in all required fields before proceeding.");
            }
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (currentStep > 0) {
                currentStep--;
                updateStep();
            }
        });
    });

    function validateStep(stepIndex) {
        const inputs = formSteps[stepIndex].querySelectorAll("input, select");
        for (let input of inputs) {
            if (!input.value) {
                return false;
            }
        }
        return true;
    }

    updateStep();
});
