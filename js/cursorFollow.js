// Function to apply the rainbow highlight effect and GSAP animation
function animateSelection() {
    const selectedText = window.getSelection();
    if (!selectedText.rangeCount) return;

    const selectedRange = selectedText.getRangeAt(0);
    const selectedContent = selectedRange.extractContents();

    const span = document.createElement("span");
    span.classList.add("rainbow-highlight");
    span.appendChild(selectedContent);
    selectedRange.insertNode(span);

    // Animate with GSAP as soon as the text is selected
    gsap.fromTo(span, 
      { backgroundPosition: "0% 50%" }, 
      { backgroundPosition: "100% 50%", duration: 3, ease: "power1.inOut", repeat: -1}
    );

    // Clear selection so the user sees the animation without the highlight being selected
    selectedText.removeAllRanges();
  }

  // Use setTimeout to allow the browser to recognize the mouse release, then animate
  document.addEventListener("mouseup", function() {
    setTimeout(animateSelection, 0); // Small delay to capture selection after mouse release
  });
