console.log("object");

const button = document.getElementById("open-btn");
console.log(button);

const toggleModal = document.getElementById("modal-container");
console.log(toggleModal);

function openModal() {
  console.log("clicked");
  toggleModal.style.display = "block";
  const closeModalX = document.getElementById("close-btn");
  closeModalX.addEventListener("click", function () {
    toggleModal.style.display = "none";
  });
}
button.addEventListener("click", openModal);

window.addEventListener("click", function (e) {
  if (e.target === toggleModal) {
    toggleModal.style.display = "none";
  }
});
