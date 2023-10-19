//  // JavaScript for the payment process
//  const paymentButton = document.querySelector(".payment-button");
//  const paymentStatus = document.querySelector(".payment-status");

//  paymentButton.addEventListener("click", () => {
//      // Simulate payment with a promise
//      const paymentPromise = new Promise((resolve, reject) => {
//          setTimeout(() => {
//              // Simulate success or failure randomly
//              const random = Math.random();
//              if (random > 0.5) {
//                  resolve();
//              } else {
//                  reject();
//              }
//          }, 2000); // Simulate a 2-second payment process
//      });

//      // Show "Processing" message during payment
//      paymentStatus.innerHTML = "Processing...";

//      paymentPromise
//          .then(() => {
//              paymentStatus.innerHTML = "Payment Successful!";
//              paymentStatus.style.color = "green";
//          })
//          .catch(() => {
//              paymentStatus.innerHTML = "Payment Failed. Please try again.";
//              paymentStatus.style.color = "red";
//          });
//  });
 const paymentButton = document.querySelector(".payment-button");
        const paymentStatus = document.querySelector(".payment-status");
        const container = document.querySelector(".payment-container");

        paymentButton.addEventListener("click", () => {
            container.style.transform = "scale(0.9)";
            
            setTimeout(() => {
                // Simulate payment with a promise
                const paymentPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // Simulate success or failure randomly
                        const random = Math.random();
                        if (random > 0.5) {
                            resolve();
                        } else {
                            reject();
                        }
                    }, 2000); // Simulate a 2-second payment process
                });

                // Show "Processing" message during payment
                paymentButton.style.backgroundColor = "#ccc";
                paymentButton.style.cursor = "not-allowed";
                paymentButton.innerHTML = "Processing";
                paymentStatus.innerHTML = "Processing...";
                paymentStatus.style.opacity = 1;

                paymentPromise
                    .then(() => {
                        paymentStatus.innerHTML = "Payment Successful!";
                        paymentStatus.style.color = "green";
                    })
                    .catch(() => {
                        paymentStatus.innerHTML = "Payment Failed. Please try again.";
                        paymentStatus.style.color = "yellow";
                    });
            }, 500); // Delay for a smoother transition
        });