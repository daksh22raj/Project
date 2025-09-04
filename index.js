    let count = 0;
    const countElement = document.getElementById("count");
    const errorElement = document.getElementById("error");
    const clearBtn = document.getElementById("clearBtn");

    // Increment
    document.getElementById("incrementBtn").addEventListener("click", () => {
      count++;
      countElement.textContent = count;
      errorElement.textContent = "";
      clearBtn.style.display = "inline-block"; // show clear button
    });

    // Decrement
    document.getElementById("decrementBtn").addEventListener("click", () => {
      if (count > 0) {
        count--;
        countElement.textContent = count;
        errorElement.textContent = "";
        if (count === 0) {
          clearBtn.style.display = "none"; // hide clear when count is 0
        }
      } else {
        errorElement.textContent = "Error : Cannot go below 0";
      }
    });

    // Clear
    clearBtn.addEventListener("click", () => {
      count = 0;
      countElement.textContent = count;
      errorElement.textContent = "";
      clearBtn.style.display = "none"; // hide clear button
    });