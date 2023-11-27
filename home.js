

// Show/hide dropdown menu
document.querySelector('.dropdown').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') ? 'block' : 'none';
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
});


// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// //   Modal open function
// const openModal = () => {
//   console.log("Modal is Open");
//   modal.classList.add("active");
//   overlay.classList.add("overlayActive");
// };

// // Modal close function
// const closeModal = () => {
//   modal.classList.remove("active");
//   overlay.classList.remove("overlayActive");
// };


function openModal(modalId) {
  var modal = document.getElementById("modal" + modalId);
  var overlay = document.querySelector(".overlay");

  modal.style.display = "block";
  overlay.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById("modal" + modalId);
  var overlay = document.querySelector(".overlay");

  modal.style.display = "none";
  overlay.style.display = "none";
}


 

