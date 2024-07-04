window.addEventListener("load", function() {
    const filterContainer = document.querySelector(".gallery-filter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item")) {
            // Deactivate existing active filter
            filterContainer.querySelector(".active").classList.remove("active");
            // Activate new filter
            event.target.classList.add("active");
            const filterValue = event.target.getAttribute("data-filter");

            galleryItems.forEach((item) => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.classList.add("show");
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                    item.classList.remove("show");
                }
            });
        }
    });
});