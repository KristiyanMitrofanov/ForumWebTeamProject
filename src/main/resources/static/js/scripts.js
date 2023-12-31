/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

//comment
function showComment() {
    var block = document.getElementById("comment-area");
    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}

function toggleOptionsMenu(button) {
    var dropdown = button.nextElementSibling;
    var isDisplayed = dropdown.style.display === 'block';
    // Hide all other dropdowns
    document.querySelectorAll('.options-dropdown').forEach(function (dropdown) {
        dropdown.style.display = 'none';
    });
    dropdown.style.display = isDisplayed ? 'none' : 'block';
}

// Function to toggle the edit post form
function toggleEditPost(postId) {
    var formId = 'edit-post-form-' + postId;
    var form = document.getElementById(formId);
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function toggleEditTags() {
    var editTagsForm = document.getElementById('edit-tags-area');
    var isDisplayed = editTagsForm.style.display === 'block';
    editTagsForm.style.display = isDisplayed ? 'none' : 'block';
}

// Function to toggle the edit comment form
function toggleEditComment(commentId) {
    var formId = 'edit-comment-form-' + commentId;
    var form = document.getElementById(formId);
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}
